from django.views.generic import ListView
from .models import Service


class ServiceListView(ListView):
    model = Service
    template_name = 'services/services-list.html'
    context_object_name = 'all_services_list'


class ServiceAddView(ListView):
    model = Service
    template_name = 'services/services-add.html'


class ServiceUpdateView(ListView):
    model = Service
    template_name = 'services/services-update.html'