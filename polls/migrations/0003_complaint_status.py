# Generated by Django 4.0.4 on 2022-05-06 23:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0002_complaint_complaint_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='complaint',
            name='status',
            field=models.CharField(max_length=100, null=True),
        ),
    ]