# Generated by Django 3.1.4 on 2021-02-28 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='gender',
            field=models.CharField(default='male', max_length=255),
            preserve_default=False,
        ),
    ]
