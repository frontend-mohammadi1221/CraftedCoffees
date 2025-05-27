window.onscroll = function () {
  Scroll();
};
function Scroll() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById("id-navi").className = "navi-slidedown";
  }
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    document.getElementById("id-about-scroll").className = "scroll-about";
  }
}

function menuButtonSnacks() {
  document.getElementById("id-drinks").className = "menu-button-off";
  document.getElementById("id-snacks").className = "menu-button-on";
  document.getElementById("id-menu-snacks").className = "menu-snacks-on";
  document.getElementById("id-menu-drinks").className = "menu-drinks-off";
}
function menuButtonDrinks() {
  document.getElementById("id-drinks").className = "menu-button-on";
  document.getElementById("id-snacks").className = "menu-button-off";
  document.getElementById("id-menu-snacks").className = "menu-snacks-off";
  document.getElementById("id-menu-drinks").className = "menu-drinks-on";
}
