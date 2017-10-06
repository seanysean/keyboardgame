var loginEL = document.getElementById("login");
var usernameEL = document.getElementById("user");
var passwordEL = document.getElementById("pass");
var errorEL = document.getElementsByClassName("error")[0];
var checkLogin = JSON.parse(sessionStorage.getItem("userDB"));
var tempo;

loginEL.addEventListener("click", function() {
  tempo = {
    "input": [usernameEL.value,passwordEL.value]
  };
  for (i in checkLogin) {
    if (JSON.stringify(checkLogin[i]) === JSON.stringify(tempo["input"])) {
      sessionStorage.setItem("loggedin",true);
      sessionStorage.setItem("username",checkLogin[i][0]);
      sessionStorage.setItem("currentAccount",JSON.stringify(checkLogin[i]));
      window.location = "home.html";
      break;
    }
    else {
      console.log(errorEL);
      setTimeout(function() {
        errorEL.style.display = "block";
        usernameEL.value = "";
        passwordEL.value = "";
      }, 500);
    }
  }
});
