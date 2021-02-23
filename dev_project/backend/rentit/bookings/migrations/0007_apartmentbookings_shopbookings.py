# Generated by Django 3.1.4 on 2021-02-23 10:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0016_apartments_removable_laundry'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bookings', '0006_auto_20210221_0822'),
    ]

    operations = [
        migrations.CreateModel(
            name='shopBookings',
            fields=[
                ('booking_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('shop_name', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('booked_from', models.DateField()),
                ('booked_till', models.DateField()),
                ('duration', models.IntegerField()),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('mobile', models.BigIntegerField()),
                ('alternate_mobile', models.BigIntegerField(blank=True, null=True)),
                ('country_code', models.CharField(max_length=255)),
                ('wifi', models.BooleanField()),
                ('TV', models.BooleanField()),
                ('purified_water', models.BooleanField()),
                ('AC', models.BooleanField()),
                ('cooler', models.BooleanField()),
                ('currency', models.CharField(max_length=255)),
                ('savings', models.IntegerField()),
                ('cost', models.BigIntegerField()),
                ('price_to_be_paid', models.BigIntegerField()),
                ('discount', models.IntegerField()),
                ('coupon', models.CharField(blank=True, max_length=255, null=True)),
                ('paid', models.BooleanField(default=True)),
                ('seller_pay', models.BigIntegerField()),
                ('invoice', models.FileField(blank=True, null=True, upload_to='invoices/% Y/% m/% d/')),
                ('cancelled', models.BooleanField(default=False)),
                ('cancelled_date', models.DateTimeField(blank=True, null=True)),
                ('cancellation_reason', models.TextField(blank=True, null=True)),
                ('feedback', models.TextField(blank=True, null=True)),
                ('extended', models.BooleanField(default=False)),
                ('is_extended', models.BooleanField(default=False)),
                ('shop_review', models.BooleanField(default=False)),
                ('refunded', models.BooleanField(default=False)),
                ('refund_amount', models.IntegerField(default=0)),
                ('paylater', models.BooleanField(default=False)),
                ('paylater_date', models.DateField(blank=True, null=True, verbose_name='Pay Later Date')),
                ('ended', models.BooleanField(default=False)),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='shop_customer_id', to=settings.AUTH_USER_MODEL)),
                ('extended_on', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='bookings.shopbookings')),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='shop_seller_id', to=settings.AUTH_USER_MODEL)),
                ('shop_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='booked_shop_id', to='products.shops')),
            ],
        ),
        migrations.CreateModel(
            name='apartmentBookings',
            fields=[
                ('booking_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('room_name', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('booked_from', models.DateField()),
                ('booked_till', models.DateField()),
                ('duration', models.IntegerField()),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('mobile', models.BigIntegerField()),
                ('alternate_mobile', models.BigIntegerField(blank=True, null=True)),
                ('country_code', models.CharField(max_length=255)),
                ('wifi', models.BooleanField()),
                ('TV', models.BooleanField()),
                ('house_refridgerator', models.BooleanField()),
                ('purified_water', models.BooleanField()),
                ('geyser', models.BooleanField()),
                ('AC', models.BooleanField()),
                ('cooler', models.BooleanField()),
                ('laundry', models.BooleanField()),
                ('currency', models.CharField(max_length=255)),
                ('savings', models.IntegerField()),
                ('cost', models.BigIntegerField()),
                ('price_to_be_paid', models.BigIntegerField()),
                ('discount', models.IntegerField()),
                ('coupon', models.CharField(blank=True, max_length=255, null=True)),
                ('paid', models.BooleanField(default=True)),
                ('seller_pay', models.BigIntegerField()),
                ('invoice', models.FileField(blank=True, null=True, upload_to='invoices/% Y/% m/% d/')),
                ('cancelled', models.BooleanField(default=False)),
                ('cancelled_date', models.DateTimeField(blank=True, null=True)),
                ('cancellation_reason', models.TextField(blank=True, null=True)),
                ('feedback', models.TextField(blank=True, null=True)),
                ('extended', models.BooleanField(default=False)),
                ('is_extended', models.BooleanField(default=False)),
                ('apartment_review', models.BooleanField(default=False)),
                ('refunded', models.BooleanField(default=False)),
                ('refund_amount', models.IntegerField(default=0)),
                ('paylater', models.BooleanField(default=False)),
                ('paylater_date', models.DateField(blank=True, null=True, verbose_name='Pay Later Date')),
                ('ended', models.BooleanField(default=False)),
                ('apartment_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='booked_apartment_id', to='products.apartments')),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='apartment_customer_id', to=settings.AUTH_USER_MODEL)),
                ('extended_on', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='bookings.apartmentbookings')),
                ('seller_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='apartment_seller_id', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
