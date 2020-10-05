from .models import Item
from rest_framework import serializers
# Create your models here.

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'item_name', 'added_on', 'price','image']