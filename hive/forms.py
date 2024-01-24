from django import forms
from .models import JobApplication, Comment

class JobApplicationForm(forms.ModelForm):
    class Meta:
        model = JobApplication
        fields = [
            'status', 
            'company_name',
            'role',
            'date_applied',
            'description'
        ]
    

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment 
        fields = [
            'job_application', 
            'text',
            'created_at'
        ]