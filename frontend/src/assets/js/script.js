
// request for choose test
console.log(document.cookie);
fetch("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?", {
method: 'GET', // or 'PUT'
headers: {
    'Content-Type': 'application/json',
},
body: {
    'response_type': 'code',
    'client_id': '530041352646-9gicnsvrup8f95aahl3k67vii713jfot.apps.googleusercontent.com',
    'scope': 'email',
    'redirect_uri': 'https://asdmanagement.netlify.app/callback/'
}
})
.then(response => response.json())
.then(data => {
    console.log(document.cookie);
console.log('Success:', data);