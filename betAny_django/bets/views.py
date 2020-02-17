from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Bet, User
from django.core import serializers
import json
from django.forms.models import model_to_dict


# Create your views here.
def index(request):
    return HttpResponse("betAny Landing Page")

def user(request):
    u = User.users.all()
    #user_dict = model_to_dict(u)
    serialized_object = serializers.serialize('json', [u,])
    struct = json.loads(serialized_object)
    #return JsonResponse(serialized_object, safe=False)
    data = json.dumps(struct)
    return HttpResponse(data,mimetype='application/json')

def bets(request):
    b = Bet.bets.all()
    #bet_list = list(b)
    serialized_bets = serializers.serialize('json', b)
    return JsonResponse(serialized_bets, safe=False)
