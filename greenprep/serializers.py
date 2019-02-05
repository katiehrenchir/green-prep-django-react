from rest_framework import serializers
from .models import Food

# The serializer transforms our Django model into JSON for use in the front end
class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        # Our JSON fields
        fields = ('id', 'name', 'calories', 'protein', 'carbs', 'fat')