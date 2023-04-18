from django import forms
from django.forms import ModelForm
from .models import Complaint


class ComplaintForm(ModelForm):
    class Meta:
        model = Complaint
        fields = ('complaint_text','status','pub_date','complaint_img',) 

        


