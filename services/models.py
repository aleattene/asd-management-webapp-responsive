from django.db import models


class Service(models.Model):
    description = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0.00)
    active_state = models.BooleanField(default=False)

    def __str__(self):
        return self.description

