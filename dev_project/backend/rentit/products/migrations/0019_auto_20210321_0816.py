# Generated by Django 3.1.4 on 2021-03-21 08:16

from django.db import migrations, models
import products.models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0018_auto_20210304_1457'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apartments',
            name='address_proof',
            field=models.FileField(blank=True, null=True, upload_to=products.models.upload_file_to2),
        ),
        migrations.AlterField(
            model_name='apartments',
            name='category',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='rooms',
            name='address_proof',
            field=models.FileField(blank=True, null=True, upload_to=products.models.upload_file_to),
        ),
        migrations.AlterField(
            model_name='shops',
            name='address_proof',
            field=models.FileField(blank=True, null=True, upload_to=products.models.upload_file_to1),
        ),
        migrations.AlterField(
            model_name='shops',
            name='category',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
