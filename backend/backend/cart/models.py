from django.db import models
import uuid
# Create your models here.

class Item(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    item_name = models.CharField(max_length=100)
    added_on = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()
    image = models.TextField(null=True, blank=True)