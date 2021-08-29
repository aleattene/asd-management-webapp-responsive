from django.test import TestCase
from django.urls import reverse
from .models import Service


class ServiceModelTest(TestCase):

    def setUp(self) -> None:
        Service.objects.create(
            description='Servizio di Prova',
            price=10.00,
            is_active=True
        )

    def test_description_content(self):
        service = Service.objects.get(id=1)
        expected_object_name = f'{service.description}'
        self.assertEqual(expected_object_name, 'Servizio di Prova')

    def test_price_content(self):
        service = Service.objects.get(id=1)
        expected_object_name = service.price
        self.assertEqual(expected_object_name, 10.00)

    def test_is_active_content(self):
        service = Service.objects.get(id=1)
        expected_object_name = service.is_active
        self.assertEqual(expected_object_name, True)


class ServiceTemplateTest(TestCase):

    def test_services_page_status_code(self):
        response = self.client.get('/services/')
        self.assertEqual(response.status_code, 200)


class ServiceViewTest(TestCase):

    def setUp(self) -> None:
        Service.objects.create(description="Secondo Servizio di Prova")

    def test_view_url_exists_at_proper_location(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_by_name(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')


