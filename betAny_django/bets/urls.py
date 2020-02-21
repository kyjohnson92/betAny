from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('user/', views.UserAPI.as_view(), name='users'),
    path('user/<int:pk>/', views.UserAPIDetail.as_view(), name='userDetail'),
    path('bets/', views.BetAPI.as_view(), name='bets'),
    path('bets/<int:pk>/', views.BetAPIDetail.as_view(), name='bets'),
]