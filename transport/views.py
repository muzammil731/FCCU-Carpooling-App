from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponse, HttpResponseRedirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core import serializers
from django.contrib.auth.models import User
from .models import Driver,Rider,Sechdule,RideRequest,Notification
from .forms import DriverForm,RiderForm
from django.contrib import messages


@csrf_exempt
def loginApi(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = authenticate(request, username=data['username'], password=data['password'])
        if user is not None:
            login(request, user)
            result = {"success": True, "user": user.username}
            try:
                _rider=Rider.objects.get(user=user)
                result = {"success": True, "user": user.username,"is_rider":True}
            except:
                print("not a rider")
        else:
            result = {"success": False, "error_message": "Invalid Username or Password"}
        response = JsonResponse(result)
        return response
    return HttpResponse('Invalid Request', status=405)

@csrf_exempt
def RegisterApi(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        _username = data['username']
        email = data['email']
        password = data['password']
        try:
            pUser = User.objects.get(username=_username)
            result = {"success": False, "error_message": "User Already Registered"}
        except:
            print("password match")
            user = User.objects.create_user(_username, email, password)
            user.save()
            user = authenticate(request, username=data['username'], password=data['password'])
            result = {"success": True, "user": user.username, "error_message": ""}
        return JsonResponse(result)
    return HttpResponse('Invalid Request', status=405)

@csrf_exempt
def changeMode(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        _username = data['user']
        _username = _username.replace('"', '')
        _User = User.objects.get(username=_username)
        print(data['userType'],_User)
        if data['userType']=='driver':
            try:
                _rider = Rider.objects.get(user=_User)
                print(_rider)
                result = {"success": True, "message": "Mode Changed To Rider Successfully"}
            except:
                result = {"success": False, "message": "You are not a Rider"}
        if data['userType']=='rider':
            try:
                _driver = Driver.objects.get(user=_User)
                print(_driver)
                result = {"success": True, "message": "Mode Changed To Driver Successfully"}
            except:
                result = {"success": False, "message": "You are not a Driver"}
        print(result)
        return JsonResponse(result)
    return HttpResponse('Invalid Request', status=405)

@csrf_exempt
def home(request):
    result = {"connection": "successful", "message": "Connected Successfully","method":"GET"}
    if request.method == 'POST':
        result["method"] = "POST"
    #return JsonResponse(result)
    return HttpResponseRedirect('http://127.0.0.1:3000/')

def RegisterDriver(request):
    try:
        _username=request.GET.get('user')
        _username=_username.replace('"','')
        _username=_username.replace(' ','')
        _User=User.objects.get(username=_username)
    except:
        return HttpResponse('Invalid Request', status=405)
    form=DriverForm()
    if request.method == 'POST':
        form = DriverForm(request.POST)
        if form.is_valid():
            form=form.save(commit=False)
            form.user=_User
            form.save()
            Sechdule.objects.create(driver=form)
            messages.success(request, 'Driver Registered Successfully')
            return HttpResponseRedirect('http://localhost:3000/signin')
        else:
            for field, errors in form.errors.items():
                messages.error(request, errors,extra_tags='danger')
                print(errors)
    context={'form':form}
    return render(request,'registerDriver.html',context)

def RegisterRider(request):
    try:
        _username=request.GET.get('user')
        _username=_username.replace('"','')
        _User=User.objects.get(username=_username)
    except:
        return HttpResponse('Invalid Request', status=405)
    form=RiderForm()
    if request.method == 'POST':
        form = RiderForm(request.POST)
        if form.is_valid():
            form=form.save(commit=False)
            form.user=_User
            form=form.save()
            # Sechdule.objects.create(driver=form)
            messages.success(request, 'Rider Registered Successfully')
            return HttpResponseRedirect('http://localhost:3000/signin')
        else:
            for field, errors in form.errors.items():
                messages.error(request, errors,extra_tags='danger')
    context={'form':form}
    return render(request,'registerRyder.html',context)

@csrf_exempt
def ScheduleApiView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        _username = data['user']
        _username = _username.replace('"', '')
        _User = User.objects.get(username=_username)
        _rider=Driver.objects.get(user=_User)
        _schedule=Sechdule.objects.get(driver=_rider)
        serialized_obj = serializers.serialize('json', [_schedule])
        return JsonResponse(serialized_obj,safe=False)
    return HttpResponse('Invalid Request', status=405)

@csrf_exempt
def setScheduleApi(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        _username = data['user']
        _username = _username.replace('"', '')
        _User = User.objects.get(username=_username)
        _rider=Driver.objects.get(user=_User)
        _schedule=Sechdule.objects.get(driver=_rider)
        if data['day']=='Monday':
            _schedule.monday=data['time']
            _schedule.monday_return=data['return']
        elif data['day']=='Tuesday':
            _schedule.tuesday=data['time']
            _schedule.tuesday_return=data['return']
        elif data['day']=='Wednesday':
            _schedule.wednesday=data['time']
            _schedule.wednesday_return=data['return']
        elif data['day']=='Thursday':
            _schedule.thursday=data['time']
            _schedule.thursday_return=data['return']
        elif data['day']=='Friday':
            _schedule.friday=data['time']
            _schedule.friday_return=data['return']
        elif data['day']=='Saturday':
            _schedule.saturday=data['time']
            _schedule.saturday_return=data['return']
        elif data['day']=='Sunday':
            _schedule.sunday=data['time']
            _schedule.sunday_return=data['return']
        _schedule.save()
        result = {"success": True, "message": "Schedule Updated Successfully"}
        return JsonResponse(result)
    return HttpResponse('Invalid Request', status=405)


def searchRides(request):
    try:
        _username=request.GET.get('user')
        _username=_username.replace('"','')
        _username=_username.replace(' ','')
        user=User.objects.get(username=_username)
        login(request, user)
    except:
        return HttpResponseRedirect('http://127.0.0.1:3000/signin')
    drivers=Driver.objects.all()
    print(request)
    _Rider=Rider.objects.get(user=request.user)
    try:
        rideRequest=RideRequest.objects.filter(rider=_Rider)
    except:
        rideRequest=None
        messages.info(request, 'No Ride Request Found',extra_tags='info')
    context={'drivers':drivers,'rideRequest':rideRequest,'Notifications':Notification.objects.filter(user=request.user),'is_rider':True,'Rider':_Rider}
    return render(request,'searchrides.html',context)


def searchRidesdetail(request):
    _driver=Driver.objects.get(id=request.GET.get('id'))
    print(request.user)
    if request.method == 'POST':
        _rider=Rider.objects.get(user=request.user)
        if request.POST.get('round_trip'):
            print('return')
            RideRequest.objects.create(rider=_rider,driver=_driver,ride_day=request.POST.get('day'),return_trip=True)
        RideRequest.objects.create(rider=_rider,driver=_driver,ride_day=request.POST.get('day'))
        messages.success(request, 'Ride Request Sent Successfully')
        Notification.objects.create(user=_driver.user,message='You have a Ride Request')
        Notification.objects.create(user=_rider.user,message='Ride Request Sent Successfully')
    context={'driver':_driver,'Notifications':Notification.objects.filter(user=request.user),'is_rider':True}
    try:
        schedule=Sechdule.objects.get(driver=_driver)
        context={'driver':_driver,'schedule':schedule,'Notifications':Notification.objects.filter(user=request.user),'is_rider':True}
    except:
        messages.error(request, 'Schedule Not Found',extra_tags='danger')
    return render(request,'searchridesdetail.html',context)

def clear_notifications(request):
    if request.method == 'POST':
        PostData=request.POST.copy()
    Notification.objects.filter(user=PostData['user']).delete()
    return HttpResponseRedirect(PostData['url'])

def RideRequestView(request):
    try:
        _username=request.GET.get('user')
        _username=_username.replace('"','')
        _username=_username.replace(' ','')
        user=User.objects.get(username=_username)
        login(request, user)
    except:
        return HttpResponseRedirect('http://localhost:3000/signin')
    if request.method == 'POST':
        PostData=request.POST.copy()
        if PostData['status']=='ACCEPT':
            rideRequest=RideRequest.objects.get(id=PostData['request_id'])
            rideRequest.status='Accepted'
            rideRequest.save()
            Notification.objects.create(user=rideRequest.rider.user,message='Your Ride Request Accepted')
            messages.success(request, 'Ride Request Accepted Successfully')
        elif PostData['status']=='REJECT' or PostData['status']=='CANCEL':
            rideRequest=RideRequest.objects.get(id=PostData['request_id'])
            rideRequest.status='Rejected'
            rideRequest.save()
            Notification.objects.create(user=rideRequest.rider.user,message='Your Ride Request Rejected')
            messages.success(request, 'Ride Request Rejected Successfully')
    driver=Driver.objects.get(user=request.user)
    rideRequest=RideRequest.objects.filter(driver=driver,status='pending')
    acceptedRideRequest=RideRequest.objects.filter(driver=driver,status='Accepted')
    context={'rideRequests':rideRequest,'Notifications':Notification.objects.filter(user=request.user),'is_driver':True,'acceptedRideRequest':acceptedRideRequest}
    return render(request,'rideRequests.html',context)

def ShowMap(request):
    location=request.GET.get('location')
    rider_id=request.GET.get('rider')
    Notification.objects.create(user=User.objects.get(id=rider_id),
                        message='Your Driver is on the way.Your Ride just Started')
    context={'location':location}
    return render(request,'ShowMap.html',context)
