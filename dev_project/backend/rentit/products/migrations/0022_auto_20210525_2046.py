# Generated by Django 3.1.4 on 2021-05-25 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0021_auto_20210525_1846'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apartments',
            name='date_verified',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
