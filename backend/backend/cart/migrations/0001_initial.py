# Generated by Django 3.1.2 on 2020-10-05 05:16

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('item_name', models.CharField(max_length=100)),
                ('added_on', models.DateTimeField(auto_now_add=True)),
                ('price', models.FloatField()),
                ('image', models.TextField()),
            ],
        ),
    ]
