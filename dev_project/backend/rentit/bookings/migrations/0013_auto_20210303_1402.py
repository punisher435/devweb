# Generated by Django 3.1.4 on 2021-03-03 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0012_auto_20210301_0406'),
    ]

    operations = [
        migrations.RenameField(
            model_name='apartmentbookings',
            old_name='acccount_no',
            new_name='account_no',
        ),
        migrations.RenameField(
            model_name='roombookings',
            old_name='acccount_no',
            new_name='account_no',
        ),
        migrations.RenameField(
            model_name='shopbookings',
            old_name='acccount_no',
            new_name='account_no',
        ),
    ]
