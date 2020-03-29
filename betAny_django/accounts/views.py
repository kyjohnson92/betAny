from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.shortcuts import render


class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'

def MyAccount(request, *arags, **kwargs):
    # get ALL bets
    # user_bets = BetAPI.queryset.all()
    # request.user_bets = user_bets
    return render(request, "myAccount.html")