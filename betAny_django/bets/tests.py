from django.test import TestCase
from .models import User, Bet
# Create your tests here.

class UserTest(TestCase):
    
    def testUser(self):
        self.assertEquals(
            User.objects.count(),
            0
        )
        User.objects.create(
            userID=1, firstName='John', lastName = 'Smith'
        )
        User.objects.create(
            userID=2, firstName='John', lastName = 'Doe'
        )
        self.assertEquals(
            User.objects.count(),
            2
        )

class BetTest(TestCase):

    def testBet(self):
        
        User.objects.create(
            userID=1, firstName='John', lastName = 'Smith'
        )
        self.assertEquals(
            Bet.objects.count(),
            0
        )
        Bet.objects.create(
            betID=1, bettorID=1, description='test'
        )
        Bet.objects.create(
            betID=2, bettorID=1, description='test'
        )
        self.assertEquals(
            Bet.objects.count(),
            2
        )
