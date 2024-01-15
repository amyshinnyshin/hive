from django.urls import path
from . import views

urlpatterns = [
    path('applications/', views.job_list, name='job_list'),
    path('applications/<int:job_application_id>/comments/', views.comment_list, name='comment_list'),
]