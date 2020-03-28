from django.urls import path
from rest_framework import routers
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('bets', views.index, name='bets'),

]