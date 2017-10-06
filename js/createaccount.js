var signupEL = document.getElementById("signup");
var usernameEL = document.getElementById("user");
var passwordEL = document.getElementById("pass");
var users = JSON.parse(sessionStorage.getItem("userDB"));


if (users == undefined) {
  users = {};
}
var temp = [];
sessionStorage.setItem("userDB",JSON.stringify(users));
console.log(sessionStorage.getItem("userDB"));
var storedNames = JSON.parse(sessionStorage.getItem("userDB"));
signupEL.addEventListener("click", function() {
  temp.push(usernameEL.value);
  temp.push(passwordEL.value);
  for (i = 0; i < 100; i++) {
    if (storedNames["user" + i] == undefined) {
      storedNames["user" + i] = temp;
      break;
    }
    else {
      //console.log(storedNames["user" + i])
    }
  }
  sessionStorage.setItem("userDB",JSON.stringify(storedNames));
});
