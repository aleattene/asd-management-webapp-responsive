from django.views.generic import ListView
from .models import Service


class ServiceListView(ListView):
    model = Service
    template_name = 'services/services.html'
    context_object_name = 'all_services_list'


