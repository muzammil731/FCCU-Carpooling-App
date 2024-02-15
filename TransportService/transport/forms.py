from django import forms
from .models import Driver,Rider

class DriverForm(forms.ModelForm):
    class Meta:
        model=Driver
        fields=('name','phone','vehicle_number','license_number','vehicle_image','license_image','address','charge_per_km')
        widgets={
            'name':forms.TextInput(attrs={'class':'input100'}),
            'phone':forms.TextInput(attrs={'class':'input100'}),
            'vehicle_number':forms.TextInput(attrs={'class':'input100'}),
            'vehicle_image':forms.FileInput(attrs={'class':'form-control'}),
            'license_number':forms.TextInput(attrs={'class':'input100'}),
            'license_image':forms.FileInput(attrs={'class':'form-control'}),
            'address':forms.TextInput(attrs={'class':'input100'}),
            'charge_per_km':forms.TextInput(attrs={'class':'input100'}),
        }


class RiderForm(forms.ModelForm):
    class Meta:
        model=Rider
        fields=('name','phone','address')
        widgets={
            'name':forms.TextInput(attrs={'class':'input100'}),
            'phone':forms.TextInput(attrs={'class':'input100'}),
            'address':forms.TextInput(attrs={'class':'input100'}),
        }