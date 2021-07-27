import requests
import json
from django.http import HttpResponse, HttpResponseBadRequest, HttpRequest
from django.views.decorators.csrf import csrf_exempt, csrf_protect

@csrf_exempt
# @api_view(['POST'])
def request_access_token(request):
    print(request.headers)
    print(request.body)
    data_request = json.loads(request.body)
    print(data_request["code"])

    url = "https://oauth2.googleapis.com/token"

    payload = {
        "code": data_request["code"],
        "client_id": data_request["client_id"],
        "client_secret": "de9KBrX8LbmAfLqjhsUAzPId",
        "redirect_uri": "https://asdmanagement.netlify.app/callback/",
        "grant_type": "authorization_code"
    }

    response = requests.post(url, params=payload)
    print(response.headers)
    print(response.text)
    if response.status_code == 200:
        return HttpResponse(response, status=200, content_type='application/json')
    else:
        return HttpResponse(response.status_code)

if __name__ == "__main__":
    request_access_token()