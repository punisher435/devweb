# Generated by Django 3.1.4 on 2021-03-25 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0004_coupons_life'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupons',
            name='currency',
            field=models.CharField(default='INR', max_length=255),
            preserve_default=False,
        ),
    ]
