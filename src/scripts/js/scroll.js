function scrollToSectionTwo() {
  gsap.to(window, {duration: 1, scrollTo:"#sectionTwo", ease: "circ"});
  /*document.querySelector("#sectionTwo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });*/
}


function backToTop() {
  gsap.to(window, {duration: 1, scrollTo:"#sectionOne", ease: "circ"});
  /*document.querySelector("#sectionOne").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });*/
}

var scrollDown = function () {
  if (window.scrollY <= 69) {
    document.querySelector(".back-to-top").style.opacity = "0";
  } else {
    document.querySelector(".back-to-top").style.opacity = "1";
  }
};

window.addEventListener("scroll", scrollDown);
