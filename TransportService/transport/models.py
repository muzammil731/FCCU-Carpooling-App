from django.db import models
from django.contrib.auth.models import User


class Driver(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    vehicle_number = models.CharField(max_length=100)
    vehicle_image = models.ImageField(upload_to='vehicle_image', blank=True, null=True)
    license_number = models.CharField(max_length=100)
    license_image = models.ImageField(upload_to='license_image', blank=True, null=True)
    address = models.CharField(max_length=100)
    charge_per_km = models.IntegerField()
    status = models.BooleanField(default=False)
    def __str__(self):
        return self.name
 
    
class Rider(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    def __str__(self):
        return self.name
    
class Sechdule(models.Model):
    driver=models.ForeignKey(Driver,on_delete=models.CASCADE)
    monday=models.TimeField(auto_now_add=False,blank=True,null=True)
    tuesday=models.TimeField(auto_now_add=False,blank=True,null=True)
    wednesday=models.TimeField(auto_now_add=False,blank=True,null=True)
    thursday=models.TimeField(auto_now_add=False,blank=True,null=True)
    friday=models.TimeField(auto_now_add=False,blank=True,null=True)
    saturday=models.TimeField(auto_now_add=False,blank=True,null=True)
    sunday=models.TimeField(auto_now_add=False,blank=True,null=True)
    to_fc=models.BooleanField(default=True),
    monday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    tuesday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    wednesday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    thursday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    friday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    saturday_return=models.TimeField(auto_now_add=False,blank=True,null=True)
    sunday_return=models.TimeField(auto_now_add=False,blank=True,null=True)


class RideRequest(models.Model):
    rider=models.ForeignKey(Rider,on_delete=models.CASCADE)
    driver=models.ForeignKey(Driver,on_delete=models.CASCADE)
    ride_day=models.CharField(max_length=100)
    return_trip=models.BooleanField(default=False)
    status=models.CharField(default="pending",max_length=200)
    def __str__(self):
        return self.rider.name
    
class Notification(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    message=models.CharField(max_length=100)
    seen=models.BooleanField(default=False)
    def __str__(self):
        return self.user.username+" "+self.message+" "+str(self.seen)