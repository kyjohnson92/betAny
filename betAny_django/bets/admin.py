from django.contrib import admin

# Register your models here.
from .models import User, Bet

admin.site.register(User)
admin.site.register(Bet)