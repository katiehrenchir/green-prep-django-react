from django.contrib import admin
from .models import Food

# Register your models here.

class FoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'calories', 'protein', 'carbs', 'fat')

admin.site.register(Food, FoodAdmin)