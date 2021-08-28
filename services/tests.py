from django.test import TestCase
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
        expected_object_name = {service.price}
        self.assertEqual(expected_object_name, 10.00)

    def test_is_active_content(self):
        service = Service.objects.get(id=1)
        expected_object_name = {service.is_active}
        self.assertEqual(expected_object_name, True)

    def test_services_page_status_code(self):
        response = self.client.get('services/')
        self.assertEqual(response.status_code, 200)



