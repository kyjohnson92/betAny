from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Bet, User
from django.core import serializers
import json
from django.forms.models import model_to_dict
from django.views import View
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from .serializer import UserSerializer, BetSerializer


# Create your views here.
def index(request):
    return HttpResponse("betAny Landing Page")


class UserAPI(generics.ListCreateAPIView):
    queryset = User.users.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

