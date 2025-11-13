from django.db import models

class User(models.Model):

    Name = models.CharField(max_length=40, unique=True)
    Age = models.IntegerField(default=18)

    def __str__(self):

        return self.Name
