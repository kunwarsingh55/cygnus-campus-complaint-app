from django.urls import path

from . import views

urlpatterns  = [
    path('home', views.home, name='home'),
    path('complaint', views.complaint, name='complaint'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('staff/', views.staff, name='staff'),
    path('logout/', views.logout, name='logout'), 
    path('resolve_complaint/<int:complaint_id>/', views.resolve_complaint, name='resolve_complaint'),
]

