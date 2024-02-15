from django.urls import path
from . import views
urlpatterns = [
    path('loginApi/',views.loginApi,name="Login_Api"),
    path('registerApi/',views.RegisterApi,name="Register_Api"),
    path('home/', views.home, name='home'),
    path('registerDriver/',views.RegisterDriver,name="Register_Driver"),
    path('registerRider/',views.RegisterRider,name="Register_Rider"),
    path('ScheduleApi/',views.ScheduleApiView,name="Schedule_Api"),
    path('setScheduleApi/',views.setScheduleApi,name="setSchedule_Api"),
    path('searchRides/',views.searchRides,name="search_Rides"),
    path('searchRidesdetail/',views.searchRidesdetail,name="search_Ridesdetail"),
    path('clear_notifications',views.clear_notifications,name="clear_notifications"),
    path('rideRequest/',views.RideRequestView,name="rideRequest"),
    path('startRide/',views.ShowMap,name="showMap"),
    path('changeMode/',views.changeMode,name="changeMode"),
]
