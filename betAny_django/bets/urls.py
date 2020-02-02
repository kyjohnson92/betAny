from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:userID>/', views.bets, name='bets'),
]