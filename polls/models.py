from django.db import models

class Complaint(models.Model):
    complaint_text = models.CharField(max_length=200)
    status = models.CharField(max_length=100, null = True)
    pub_date = models.DateTimeField('Date Published')
    complaint_img=models.ImageField(null=True,blank=True,upload_to="images/")


    

