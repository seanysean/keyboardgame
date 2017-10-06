var topbarEL = document.getElementById("topbar");
var menuEL = document.getElementById("menu");
topbar.innerHTML = `<i class="fa fa-bars" id="menubtn"></i>
                    <span class="title">Keyboard Game</span>
                    <span class="username">${sessionStorage.getItem("username")}</span>`;
menuEL.innerHTML = `<div class="top">
                      <i class="fa fa-bars" id="menubtn2"></i>
                      <span>Menu</span>
                    </div>
                    <a href="#">Play</a>
                    <a href="#">Leaderboard</a>
                    <a class="dark" id="signout" href="#">Sign out</a>`;
var menubtnEL = document.getElementById("menubtn"),
    menubtn2EL = document.getElementById("menubtn2"),
    signoutEL = document.getElementById("signout");
menubtnEL.addEventListener("click",function() {
  menuEL.classList.remove("closed");
});
menubtn2EL.addEventListener("click",function() {
  menuEL.classList.add("closed");
});
signoutEL.addEventListener("click", function() {
  sessionStorage.setItem("loggedin",false);
  setTimeout(function() {
    window.location = "/Users/imac/Documents/keyboardgame/login.html";
    console.log("Topbarjs");
  }, 300);
})
