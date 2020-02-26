from django.db import models

# Create your models here.
class User(models.Model):
    userID = models.IntegerField(primary_key=True, unique=True)
    firstName = models.CharField(null=False, max_length=25)
    lastName = models.CharField(null=False, max_length=30)
    assets = models.DecimalField(decimal_places=2, max_digits=20, default=0.00)

    class Meta:
        ordering = ['userID']

    def __str__(self):
        return str(self.userID)
        
    objects = models.Manager()


class Bet(models.Model):
    bettorID = models.ForeignKey(User, related_name='party1', on_delete=models.CASCADE)
    betID = models.IntegerField(primary_key=True, unique=True)
    description = models.CharField(max_length=200)
    bettor_amount = models.DecimalField(decimal_places=2, max_digits=20)
    betteeID = models.ForeignKey(User, related_name='party2', on_delete=models.CASCADE)
    betOutcome = models.CharField(max_length=20, choices=[('0',''),('1', str(bettorID) + '__Wins'),('2',str(betteeID) +'__Wins')], default='0')
    
    class Meta:
        #get_latest_by = 'to be added date field'
        #update order to be date & betID
        ordering = ['betID']

    def __str__(self):
        return str(self.betID)
 
    objects = models.Manager()
    