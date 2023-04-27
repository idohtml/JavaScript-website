////////////// GRAB ELELMENTS ////////////////
///////////////////////////////////////////////
// TITLES
const heroText = document.querySelector(".primary-heading");
const faqTitle = document.querySelector(".faq-title");
const galleryTitle = document.querySelector(".photo-title");
const beatTitle = document.querySelector(".beat-heading");

///////////////// SET VALUES //////////////////
///////////////////////////////////////////////
heroText.innerHTML = "The story of my journey must continue";
beatTitle.innerHTML = "Welcome to my world";
faqTitle.innerHTML = "Frequently Asked Questions";
galleryTitle.innerHTML = "Gallery";

// BLOB
const blob = document.getElementById("blob");
document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
