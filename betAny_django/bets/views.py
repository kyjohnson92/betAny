from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict
from django.views import View
from .models import Bet, UserProfile

# Create your views here.
def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html", {})

def bets(request, *args, **kwargs):
    return render(request, "bets.html")
