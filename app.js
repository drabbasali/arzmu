const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".btn");
const links = document.querySelectorAll(".btn li");


hamburger.addEventListener("click", () =>{ 
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
});

const hamb = document.querySelector(".hamb");
const navb = document.querySelector(".navbtn");
const lin = document.querySelectorAll(".navbtn li");


hamb.addEventListener("click", () =>{ 
    navb.classList.toggle("open");
    lin.forEach(link =>{
        lin.classList.toggle("fade");
    })
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
var collap = document.getElementsByClassName("collaps");
var i;

for (i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/* tool tips */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

/* search function section */
