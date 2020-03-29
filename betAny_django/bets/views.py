from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.views import View
from django.urls import reverse_lazy
from django.views.generic import CreateView,TemplateView
from .forms import CreateBet


from .models import Bet, UserProfile

# Create your views here.
def index(request, *args, **kwargs):
    print(args, kwargs)
    return render(request, "index.html", {})

def bets(request, *args, **kwargs):
    return render(request, "bets.html")

def createBet(request):
    if request.method == 'POST':
        form = CreateBet(request.POST)
        
        if form.is_valid():
            bet = form.save(commit=False)
            #bet.betID = object.pk
            bet.bettorID = request.user
            bet.betteeID = None  
            bet.save()
            return redirect('index')
    else:
        form = CreateBet()

    return render(request, 'home.html', {'form': form})