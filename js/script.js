// var burgerMenu = document.getElementById('burger-menu');

// var overlay = document.getElementById('menu');

// burgerMenu.addEventListener('click', function() {
//   this.classList.toggle("close");
//   overlay.classList.toggle("overlay");
// });

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// /* Open when someone clicks on the span element */
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }
