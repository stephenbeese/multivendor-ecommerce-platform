# Generated by Django 4.2 on 2024-02-29 20:20

from django.db import migrations
import shortuuid.django_fields


class Migration(migrations.Migration):

    dependencies = [
        ('userauths', '0002_alter_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='pid',
            field=shortuuid.django_fields.ShortUUIDField(alphabet='abcdefghijklmnopqrstuvwxyz', length=10, max_length=20, prefix='', unique=True),
        ),
    ]