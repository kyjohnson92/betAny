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
        first_name = self.user.first_name
        last_name = self.user.last_name
        return f'User: {first_name} {last_name}'
        
    objects = models.Manager()

@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    else:
        instance.userprofile.save()



class Bet(models.Model):

    betID = models.AutoField(primary_key=True)
    bettorID = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    description = models.CharField(max_length=200)
    bettor_amount = models.DecimalField(decimal_places=2, max_digits=20,validators=[MinValueValidator(0.01)])
    betteeID = models.ForeignKey(UserProfile, related_name='party2', on_delete=models.CASCADE, blank=True, null=True)

    STATUS_OF_BET = [
        ('pending', 'Bet pending another party'),
        ('accepted', 'Bet accepted. Pending outcome'),
        ('bettor_wins', 'Winner:Bettor ' + str(bettorID)),
        ('bettee_wins', 'Winner:Bettee ' + str(betteeID))
    ]

    betOutcome = models.CharField(max_length=20, choices=STATUS_OF_BET, default='pending')
    created_on = models.DateTimeField(auto_now_add=True)
    
    def clean(self, *args, **kwargs):
        if self.bettor_amount > self.bettorID.account_balance:
            raise ValidationError("Insufficient funds. Please add more to account.")

        if self.betteeID is not None and self.bettor_amount > self.betteeID.account_balance:
            raise ValidationError("Insufficient funds. Please add more to account.")

        if self.betteeID == self.bettorID:
            raise ValidationError("Invalid: Bettor cannot accept own bet.")

        super(Bet, self).clean(*args, **kwargs)

    def save(self, *args, **kwargs):
        self.full_clean()
        super(Bet, self).save(*args, **kwargs)

    class Meta:
        #get_latest_by = 'to be added date field'
        #update order to be date & betID
        ordering = ['betID']

    def __str__(self):
        return str(self.betID)
 
    objects = models.Manager()
    