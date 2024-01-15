from django.contrib import admin
from .models import JobApplication, Comment

# Register your models here.
admin.site.register(JobApplication)
admin.site.register(Comment)