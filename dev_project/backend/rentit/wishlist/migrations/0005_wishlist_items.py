# Generated by Django 3.1.4 on 2021-01-10 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wishlist', '0004_auto_20210109_1239'),
    ]

    operations = [
        migrations.AddField(
            model_name='wishlist',
            name='items',
            field=models.IntegerField(default=0),
        ),
    ]
