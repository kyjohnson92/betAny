from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('/api/user/', views.UserAPI.as_view(), name='users'),
    path('/api/user/<int:pk>/', views.UserAPIDetail.as_view(), name='userDetail'),
    path('/api/bets/', views.BetAPI.as_view(), name='bets'),
    path('/api/bets/<int:pk>/', views.BetAPIDetail.as_view(), name='bets'),
]