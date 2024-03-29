# Generated by Django 3.1.4 on 2021-04-04 15:49

import complaint.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0019_auto_20210321_0816'),
        ('complaint', '0006_auto_20210404_2111'),
    ]

    operations = [
        migrations.CreateModel(
            name='shop_complaints',
            fields=[
                ('complaint_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('shop_name', models.CharField(max_length=255)),
                ('customer_name', models.CharField(max_length=255)),
                ('seller_name', models.CharField(max_length=255)),
                ('customer_contact', models.CharField(max_length=255)),
                ('seller_contact', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('subject', models.CharField(max_length=255)),
                ('message', models.TextField()),
                ('photo1', models.ImageField(blank=True, null=True, upload_to=complaint.models.upload_to_shop_complaint, verbose_name='Image')),
                ('reply', models.TextField(blank=True, null=True)),
                ('customer_fullfilled', models.BooleanField(default=False)),
                ('seller_fullfilled', models.BooleanField(default=False)),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_shop_customer_id', to=settings.AUTH_USER_MODEL)),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_shop_seller_id', to=settings.AUTH_USER_MODEL)),
                ('shop_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_shop_id', to='products.shops')),
            ],
        ),
        migrations.CreateModel(
            name='apartment_complaints',
            fields=[
                ('complaint_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('apartment_name', models.CharField(max_length=255)),
                ('customer_name', models.CharField(max_length=255)),
                ('seller_name', models.CharField(max_length=255)),
                ('customer_contact', models.CharField(max_length=255)),
                ('seller_contact', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('subject', models.CharField(max_length=255)),
                ('message', models.TextField()),
                ('photo1', models.ImageField(blank=True, null=True, upload_to=complaint.models.upload_to_apartment_complaint, verbose_name='Image')),
                ('reply', models.TextField(blank=True, null=True)),
                ('customer_fullfilled', models.BooleanField(default=False)),
                ('seller_fullfilled', models.BooleanField(default=False)),
                ('apartment_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_apartment_id', to='products.apartments')),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_apartment_customer_id', to=settings.AUTH_USER_MODEL)),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='complaint_apartment_seller_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
