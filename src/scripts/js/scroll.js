function scrollToSectionTwo() {
  gsap.to(window, {duration: 0.2, scrollTo:"#sectionTwo", ease: "sine"});
  /*document.querySelector("#sectionTwo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });*/
}


function backToTop() {
  gsap.to(window, {duration: 0.2, scrollTo:"#sectionOne", ease: "sine"});
  /*document.querySelector("#sectionOne").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });*/
}

var scrollDown = function () {
  if (window.scrollY <= 69) {
    document.querySelector(".back-to-top").style.display = "none";
  } else {
    document.querySelector(".back-to-top").style.display = "block";
  }
};

window.addEventListener("scroll", scrollDown);
