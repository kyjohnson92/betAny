from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('user/', views.UserAPI.as_view(), name='users'),
    #path('user/<userID>/', views.userDetail, name='userDetail'),
    #path('bets/', views.bets, name='bets'),
]