from django import forms
from .models import Bet

class CreateBet(forms.ModelForm):
    
    class Meta:
        model = Bet
        fields = ('description', 'bettor_amount')