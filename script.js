const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function reloadpage() {
  location.reload();
}

function redirIg() {
  window.location.href = "https://instagram.com/uuarneck_gltm";
}

function redirWa() {
  window.location.href = "https://wa.me/6282366935302/?text=Hello";
}

function redirFb() {
  window.location.href = "https://www.facebook.com/uuarnek.gltm/";
}
function redirGH() {
  window.location.href = "https://github.com/jewege";
}

function contact() {
  window.location.href = "mailto:jonwarnekgultom@gmail.com";
}

function project0() {
  window.location.href = "https://jewege.github.io/Build-a-Blackjack-Game/";
}
function project1() {
  window.location.href = "https://youtu.be/m1EuO-vsivE";
}

function project2() {
  window.location.href = "https://youtu.be/kK6J3loAGYs";
}

function project3() {
  window.location.href = "https://github.com/jewege/Jam-Digital";
}

function project4() {
  window.location.href =
    "https://github.com/jewege/Membuat-Navbar-responsive-dengan-menggunakan-HTML-CSS-JavaScript";
}

function project5() {
  window.location.href = "https://github.com/jewege/Contoh-Company-Profile";
}

function project6() {
  window.location.href =
    "https://github.com/jewege/Calculator-dengan-HTML-CSS-JavaScript";
}
function project7() {
  window.location.href =
    "https://github.com/jewege/Todolist-Yang-sangat-sederhana-dengan-Javascript";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  console.log("p");
}
