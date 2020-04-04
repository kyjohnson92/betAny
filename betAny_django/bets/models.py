from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, ValidationError
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    account_balance = models.DecimalField(decimal_places=2, max_digits=20, default=0.00)

    class Meta:
        ordering = ['user']

    def __str__(self):
        userName = self.user.get_full_name()
        return f"{userName} Profile"
        
    objects = models.Manager()

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    else:
        instance.userprofile.save()

class Bet(models.Model):
    betID = models.AutoField(primary_key=True)
    bettorID = models.ForeignKey(User, related_name='party1', on_delete=models.CASCADE)
    description = models.CharField(max_length=200)
    bettor_amount = models.DecimalField(decimal_places=2, max_digits=20,validators=[MinValueValidator(0.01)])
    betteeID = models.ForeignKey(User, related_name='party2', on_delete=models.CASCADE, blank=True, null=True)
    betOutcome = models.CharField(max_length=20, choices=[('0','Pending Acceptance'),('1', str(bettorID) + '__Wins'),('2',str(betteeID) +'__Wins')], default='0')
    
    def clean(self):
        if self.bettor_amount < UserProfile.account_balance:
            raise ValidationError("Insufficient funds. Please add more.")

    class Meta:
        #get_latest_by = 'to be added date field'
        #update order to be date & betID
        ordering = ['betID']

    def __str__(self):
        return str(self.betID)
 
    objects = models.Manager()
    