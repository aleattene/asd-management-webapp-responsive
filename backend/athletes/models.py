from django.db import models


class Athletes(models.Model):
    surname = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    birthdate = models.DateField()
    state = models.BooleanField()

    def __str__(self):
        return self.surname + self.name + " born on " + self.birthdate + " (Active)"

