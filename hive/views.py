from django.shortcuts import render
from .models import JobApplication, Comment

# Create your views here.
def job_list(request): 
    job_applications = JobApplication.objects.all()
    return render(request, 'applications.html', {'job_applications': job_applications})


def comment_list(request, job_application_id):
    job_application = JobApplication.objects.get(id = job_application_id)
    comments = Comment.objects.filter(job_application = job_application)
    return render(request, 'comments.html', {'job_application': job_application, 'comments': comments})