from django.shortcuts import render, redirect

from .models import JobApplication, Comment
from .forms import JobApplicationForm


# Create your views here.
def application_list(request): 
    job_applications = JobApplication.objects.all()

    return render(request, 'applicationlist.html', {'job_applications': job_applications})


def add_application(request):
    if request.method == 'POST':
        form = JobApplicationForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to the same form with empty inputs
            return redirect('application_list')
        else:
            print("Form errors:", form.errors)
    else: 
        form = JobApplicationForm()
    
    return render(request, 'addapplication.html', {'form': form})


def comment_list(request, job_application_id):
    job_application = JobApplication.objects.get(id = job_application_id)
    comments = Comment.objects.filter(job_application = job_application)
    return render(request, 'comments.html', {'job_application': job_application, 'comments': comments})