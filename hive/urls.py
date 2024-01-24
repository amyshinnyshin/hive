from django.urls import path
from .views import (
    JobApplicationList,
    JobApplicationDetail,
    CommentList,
    CommentDetails
)


urlpatterns = [
    path('myapplications/', JobApplicationList.as_view(), name='job_application_list'),

    path('myapplications/<int:pk>/', JobApplicationDetail.as_view(), name='job_application_detail'),

    path('comments/', CommentList.as_view(), name='comment_list'),

    path('comments/<int:pk>/', CommentDetails.as_view(), name='comment_details'),
]
