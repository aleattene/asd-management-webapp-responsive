from django.urls import path, include
from .views import request_access_token

urlpatterns = [
    path('token/', request_access_token, name='request_access_token')
]