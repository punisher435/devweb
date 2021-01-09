# Generated by Django 3.1.4 on 2021-01-09 12:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wishlist', '0003_auto_20210109_0719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='user_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
