# Generated by Django 3.1.4 on 2021-04-05 13:21

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('complaint', '0014_auto_20210405_2352'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message_class',
            name='receiver_id',
        ),
        migrations.AddField(
            model_name='message_class',
            name='seller_id',
            field=models.ManyToManyField(related_name='message_receiver', to=settings.AUTH_USER_MODEL),
        ),
    ]