# Generated by Django 3.1.4 on 2021-02-18 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20210218_0949'),
    ]

    operations = [
        migrations.AddField(
            model_name='apartments',
            name='fans',
            field=models.IntegerField(default=0),
        ),
    ]
