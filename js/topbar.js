var topbarEL = document.getElementById("topbar");
var menuEL = document.getElementById("menu");
menuEL.classList.add("closed");
topbar.innerHTML = `<i class="fa fa-bars" id="menubtn"></i>
                    <span class="title">${pagename}</span>
                    <a href="file:///Users/imac/Documents/keyboardgame/me.html" class="username">${sessionStorage.getItem("username")}</span>`;
menuEL.innerHTML = `<div class="top">
                      <i class="fa fa-bars" id="menubtn2"></i>
                      <span>Menu</span>
                    </div>
                    <a href="file:///Users/imac/Documents/keyboardgame/home.html">Home</a>
                    <a href="file:///Users/imac/Documents/keyboardgame/games">Play</a>
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
    window.location = "file:///Users/imac/Documents/keyboardgame/login.html";
  }, 300);
})
