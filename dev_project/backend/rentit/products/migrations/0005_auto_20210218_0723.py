# Generated by Django 3.1.4 on 2021-02-18 07:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_shops_balcony'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shops',
            old_name='facilities',
            new_name='facility',
        ),
    ]
