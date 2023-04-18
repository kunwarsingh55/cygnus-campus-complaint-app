from django.urls import path

from . import views

urlpatterns = [
    path('home', views.index1, name='index1'),
    path('com', views.comp, name='comp'),
    path('complaint_lists', views.all_complaints, name='list'),
    path('view_complaint', views.view_complaint, name = 'viewComplaint'),
    path('' , views.home, name = 'home'),
    path('signin', views.signup, name = 'signup'),
    path('admin', views.adminControl, name='adminControl'),
    path('statusUpdate', views.updateStatus.as_view(), name = 'ustatus'),
    path('faqPage', views.faq, name = 'faq'),

]