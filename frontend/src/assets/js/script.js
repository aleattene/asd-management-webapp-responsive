
console.log('Script OK'); // test

function getAuthorizationCode() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('code');
    var state = urlParams.get('state');
    var element = document.getElementById("auth_code");
    document.cookie = "authorization_code = " + code;
    return element.innerHTML = "<br><br>" +
    "Authorization code = " + code + "<br><br>"; //+
    "State = " + state;
}



console.log('END Script'); // test


