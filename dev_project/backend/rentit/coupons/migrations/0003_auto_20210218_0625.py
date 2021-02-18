# Generated by Django 3.1.4 on 2021-02-18 06:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('coupons', '0002_auto_20210218_0625'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupons',
            name='seller_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_by', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='coupons',
            name='used_by',
            field=models.ManyToManyField(blank=True, related_name='used_by', to=settings.AUTH_USER_MODEL),
        ),
    ]
