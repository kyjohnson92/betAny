from django.db import models

# Create your models here.
class User(models.Model):
    userID = models.IntegerField(primary_key=True, unique=True)
    firstName = models.CharField(null=False, max_length=25)
    lastName = models.CharField(null=False, max_length=30)
    assets = models.DecimalField(decimal_places=2, max_digits=20)

class Bet(models.Model):
    userID = models.ForeignKey(User, on_delete=models.CASCADE)
    betID = models.IntegerField(primary_key=True, unique=True)
    description = models.CharField(max_length=200)
    bettor_amount = models.DecimalField(decimal_places=2, max_digits=20)
    