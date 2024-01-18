from django.urls import path
from .views import application_list, add_application, comment_list

urlpatterns = [
    path('myapplications/', application_list, name='application_list'),
    path('myapplications/add/', add_application, name='add_application' ),
    path('myapplications/<int:job_application_id>/comments/', comment_list, name='comment_list')
]