# Generated by Django 3.1.4 on 2020-12-21 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20201221_1822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rooms',
            name='date_verified',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
