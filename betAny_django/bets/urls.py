from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user/', views.user, name='users'),
    path('bets/', views.bets, name='bets')
]