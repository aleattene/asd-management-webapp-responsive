from django.urls import path
from .views import ServiceListView, ServiceAddView, ServiceUpdateView

urlpatterns = [
    path('services/', ServiceListView.as_view(), name='services'),
    path('services/add/', ServiceAddView.as_view(), name='services-add'),
    path('services/<int:pk>/', ServiceUpdateView.as_view(), name='services-update'),
]