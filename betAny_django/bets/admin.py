from django.contrib import admin

from .models import Bet, UserProfile

#admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Bet)