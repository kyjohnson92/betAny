from django.urls import path
from django.conf.urls import url
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('token/', obtain_jwt_token),
    path('user/', views.UserAPI.as_view(), name='users'),
    path('user/<int:pk>/', views.UserAPIDetail.as_view(), name='userDetail'),
    path('bets/', views.BetAPI.as_view(), name='bets'),
    path('bets/<int:pk>/', views.BetAPIDetail.as_view(), name='betDetail'),
]