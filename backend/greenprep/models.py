from django.db import models

# Create your models here.

class Food(models.Model):
    name = models.CharField(max_length=120)
    #serving_sizes(S)  = 

    # This amount per 100g?
    calories = models.IntegerField()
    protein = models.DecimalField(max_digits=6, decimal_places=2)
    carbs = models.DecimalField(max_digits=6, decimal_places=2)
    fat = models.DecimalField(max_digits=6, decimal_places=2)

    def _str_(self):
        return self.name