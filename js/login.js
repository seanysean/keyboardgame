var loginEL = document.getElementById("login");
var usernameEL = document.getElementById("user");
var passwordEL = document.getElementById("pass");
var checkLogin = JSON.parse(sessionStorage.getItem("userDB"));
var tempo;

loginEL.addEventListener("click", function() {
  tempo = {
    "input": [usernameEL.value,passwordEL.value]
  };
  for (i in checkLogin) {
    if (JSON.stringify(checkLogin[i]) === JSON.stringify(tempo["input"])) {
      sessionStorage.setItem("loggedin",true);
      sessionStorage.setItem("username",checkLogin[i]);
      window.location = "home.html";
      break;
    }
    else {
      //console.log(checkLogin[i] + " " + tempo["input"])
    }
  }
});
