from django.urls import path
from rest_framework import routers
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('my-bets', views.bets, name='my-bets'),
    path('all-bets', views.getAllBets, name='all-bets'),
]