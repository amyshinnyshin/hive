from django.db import models

# Create your models here.
class JobApplication(models.Model):
    APPLIED = 'applied'
    INTERVIEWS = 'interviews'
    REJECTED = 'rejected'
    OFFERED = 'offered'
    DEFERRED = 'deferred'
    SELECTED = 'selected'

    STATUS_CHOICES = [
        (APPLIED, 'Applied'),
        (INTERVIEWS, 'Interviews'),
        (REJECTED, 'Rejected'),
        (OFFERED, 'Offered'),
        (DEFERRED, 'Deferred'),
        (SELECTED, 'Selected'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    company_name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    date_applied = models.DateField()
    description = models.TextField(blank=True)


class Comment(models.Model):
    job_application = models.ForeignKey(JobApplication, on_delete = models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)