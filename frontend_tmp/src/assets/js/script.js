
console.log('Script OK'); // initial test


// Delete all cookies
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// All cookies are deleted when the page is opened
deleteAllCookies();


// Set the cookie with name "client_id"
client_id = "530041352646-9gicnsvrup8f95aahl3k67vii713jfot.apps.googleusercontent.com"
document.cookie = "client_id = " + client_id


// This function retrieves the authorization_code from the query string
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


// This function returns the cookie value by name
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

// This function calls the backend API to receive the access_token
function getAccessToken() {
    client_id = getCookie("client_id")
    code = getCookie("authorization_code")
    data = {'code': code , 'client_id': client_id }
    // console.log(code)
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
        console.log(data);
        document.cookie = "authorization_code=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "access_token = " + data["access_token"];
        var element = document.getElementById("access_token");
        return element.innerHTML = "<br><br>" +
        "Access Token = " + data["access_token"] + "ax-rs154_end" + "<br><br>" +
        "Expires in = " + data["expires_in"] + "<br><br><br><br>";
        })
        //.catch(err => {
        //console.log("Errors: ", err)
        //})

    }


// This function deletes a cookie by name
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



console.log('END Script'); // final test



