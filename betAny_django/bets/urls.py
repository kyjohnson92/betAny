from django.urls import path
from rest_framework import routers
from django.views.generic.base import TemplateView
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('my-bets', views.bets, name='my-bets'),
    path('all-bets', views.getAllBets, name='all-bets'),
    #path('home/', TemplateView.as_view(template_name='home.html'), name='home'),
    path('home/', views.createBet, name='home'),
]