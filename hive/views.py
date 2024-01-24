from rest_framework import generics

from .models import JobApplication, Comment
from .serializers import JobApplicationSerializer, CommentSerializer


# Application List View
class JobApplicationList(generics.ListCreateAPIView):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

# Application Detail View
class JobApplicationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer




    
# class CommentList(generics.ListCreateAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer


class CommentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all() 
    serializer_class = CommentSerializer

# # Comment List View
class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        job_application_id = self.request.query_params.get('job_application')
        if job_application_id:
            return Comment.objects.filter(job_application=job_application_id)
        else:
            return Comment.objects.all()