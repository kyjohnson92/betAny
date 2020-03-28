from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from .serializer import UserSerializer, BetSerializer
from bets.models import Bet, UserProfile

# Create your views here.
def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html", {})


class UserAPI(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer


class UserAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer
    #permission_classes = [IsAdminUser]


class BetAPI(generics.ListCreateAPIView):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer

class BetAPIDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer
    #permission_classes = [IsAdminUser]

    #def list(self, request):
     #   queryset = self.get_queryset()
      #  serializer = BetSerializer(queryset, many=True)
       # return Response(serializer.data)