# Generated by Django 3.1.4 on 2021-02-22 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_delete_room_rating_and_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='shops',
            name='AC',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='shops',
            name='cost_AC',
            field=models.IntegerField(default=0),
        ),
    ]
