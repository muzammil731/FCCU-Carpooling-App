# Generated by Django 3.2.12 on 2023-05-20 14:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transport', '0004_auto_20230520_1743'),
    ]

    operations = [
        migrations.CreateModel(
            name='RideRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=False)),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transport.driver')),
                ('rider', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transport.rider')),
            ],
        ),
    ]