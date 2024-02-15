from django.contrib import admin
from .models import Driver,Rider,Sechdule,RideRequest,Notification

class DriverAdmin(admin.ModelAdmin):
    list_display = ['name','phone','vehicle_number','license_number','address','charge_per_km','status']

class RiderAdmin(admin.ModelAdmin):
    list_display=['name','phone','address']

admin.site.register(Driver,DriverAdmin)
admin.site.register(Rider,RiderAdmin)
admin.site.register(Sechdule)
admin.site.register(RideRequest)
admin.site.register(Notification)
