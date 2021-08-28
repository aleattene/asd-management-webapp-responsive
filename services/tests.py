from django.test import SimpleTestCase


class SimpleTests(SimpleTestCase):

    def test_services_page_status_code(self):
        response = self.client.get('services/')
        self.assertEqual(response.status_code, 200)

