from django.urls import path
from .views import User_API

urlpatterns = [
    path('data/', User_API.as_view()),
    path('data/<int:user_id>/', User_API.as_view())
]
