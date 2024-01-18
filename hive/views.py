from rest_framework import generics
from rest_framework.response import Response
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



# Comment List View
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all() 
    serializer_class = CommentSerializer  
