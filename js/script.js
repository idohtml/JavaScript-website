////////////// GRAB ELELMENTS ////////////////
///////////////////////////////////////////////
// NAVBAR
const navbar = document.querySelector(".navbar-menu");
const burger = document.getElementById("burger");
// FAQ
const faqs = document.querySelectorAll("#FAQ");
//////////// TOGGLE THE NAVBAR MENU //////////
///////////////////////////////////////////////
burger.addEventListener("click", () => {
  if (burger.checked) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});

///////////////// FAQ TOGGLE /////////////////
///////////////////////////////////////////////
faqs.forEach((faq) => {
  faq.addEventListener("click", () => faq.classList.toggle("open"));
});

///////////// SET YEAR IN FOOTER /////////////
///////////////////////////////////////////////
document.getElementById("year").innerHTML = new Date().getFullYear();
