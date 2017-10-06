var logins = ["/Users/imac/Documents/keyboardgame/signup.html","/Users/imac/Documents/keyboardgame/login.html"]
if (sessionStorage.getItem("loggedin") == undefined) {
  sessionStorage.setItem("loggedin",false);
}
if (sessionStorage.getItem("loggedin") == "false" && window.location.pathname !== logins[0] && window.location.pathname !== logins[1]) {
  window.location = "login.html";
}
else if (sessionStorage.getItem("loggedin") == "true"){
  if (window.location.pathname == logins[0] || window.location.pathname == logins[1]) {
    window.location = "home.html";
  }
}
