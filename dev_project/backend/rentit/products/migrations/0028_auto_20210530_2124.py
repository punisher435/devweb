# Generated by Django 3.1.4 on 2021-05-30 15:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0027_auto_20210530_1122'),
    ]

    operations = [
        migrations.AddField(
            model_name='apartments',
            name='contact',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='rooms',
            name='contact',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='shops',
            name='contact',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
