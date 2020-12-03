# Generated by Django 3.1.4 on 2020-12-03 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_type', models.CharField(choices=[('room', 'Room'), ('shop', 'Shop'), ('apartment', 'Apartment')], max_length=255)),
                ('portion', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='wishlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_type', models.CharField(choices=[('room', 'Room'), ('shop', 'Shop'), ('apartment', 'Apartment')], max_length=255)),
            ],
        ),
    ]
