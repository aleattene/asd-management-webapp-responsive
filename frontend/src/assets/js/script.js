
console.log('Script OK'); // test

function getAuthorizationCode() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    var state = urlParams.get('state');
    var element = document.getElementById("auth_code");
    var btn = document.getElementById("btn_token")
    btn.style.display = "";
    document.cookie = "authorization_code = " + code;
    return element.innerHTML = "<br><br>" +
    "Authorization code = " + code + "<br><br>" +
    "State = " + state + "<br><br><br><br>";
}

function getAccessToken(code) {
    client_id = "530041352646-9gicnsvrup8f95aahl3k67vii713jfot.apps.googleusercontent.com"
    fetch("https://.herokuapp.com/api/token/", {
    method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
    'code: ' + code,
    'client_id: ' + client_id
    }
    }
    )
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    }

console.log('END Script'); // test


