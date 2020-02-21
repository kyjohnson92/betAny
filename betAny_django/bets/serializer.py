from rest_framework.serializers import ModelSerializer
from .models import User, Bet

class UserSerializer(ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
        
class BetSerializer(ModelSerializer):

    class Meta:
        model = Bet
        fields = '__all__'