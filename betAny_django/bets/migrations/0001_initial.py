# Generated by Django 3.0.2 on 2020-02-02 17:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('userID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('firstName', models.CharField(max_length=25)),
                ('lastName', models.CharField(max_length=30)),
                ('assets', models.DecimalField(decimal_places=2, max_digits=20)),
            ],
        ),
        migrations.CreateModel(
            name='Bet',
            fields=[
                ('betID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('description', models.CharField(max_length=200)),
                ('bettor_amount', models.DecimalField(decimal_places=2, max_digits=20)),
                ('userID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bets.User')),
            ],
        ),
    ]
