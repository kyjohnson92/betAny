from rest_framework.serializers import ModelSerializer
from bets.models import UserProfile, Bet

class UserSerializer(ModelSerializer):
    
    class Meta:
        model = UserProfile
        fields = '__all__'
        
class BetSerializer(ModelSerializer):

    class Meta:
        model = Bet
        fields = '__all__'