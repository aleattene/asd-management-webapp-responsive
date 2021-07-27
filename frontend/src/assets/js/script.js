
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


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function getAccessToken() {
    client_id = "530041352646-9gicnsvrup8f95aahl3k67vii713jfot.apps.googleusercontent.com"
    code = getCookie("authorization_code")
    data = {'code': code , 'client_id': client_id }
    console.log(code)

    fetch("http://127.0.0.1:8000/api/token/", {
        method: 'POST',
        //mode: 'no-cors', // cors, *cors, same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        var element = document.getElementById("access_token");
        return element.innerHTML = "<br><br>" +
        "Access Token = " + data["access_token"] + "ax-rs154_end" + "<br><br>" +
        "Expires in = " + data["expires_in"] + "<br><br><br><br>";
        })
        //.catch(err => {
        //console.log("Errors: ", err)
        //})

    }

console.log('END Script'); // test


