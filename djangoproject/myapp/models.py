from django.db import models

# Create your models here.
class Table(models.Model):
    # Define the columns
    name = models.CharField(max_length=64)
    age = models.IntegerField()
    country = models.CharField(max_length=64)

    def __str__(self):
        return (f"ID:{self.id} Name:{self.name} Age:{self.age} Country:{self.country}")