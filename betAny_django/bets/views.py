from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from django.views import View
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from .serializer import UserSerializer, BetSerializer
from .models import Bet, User

# Create your views here.
def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html", {})


class UserAPI(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

class UserAPIDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

class BetAPI(generics.ListAPIView):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = BetSerializer(queryset, many=True)
        return Response(serializer.data)

class BetAPIDetail(generics.RetrieveAPIView):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer
    permission_classes = [IsAdminUser]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = BetSerializer(queryset, many=True)
        return Response(serializer.data)