function scrollToSectionTwo() {
  document.querySelector("#sectionTwo").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function backToTop() {
  document.querySelector("#sectionOne").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

var scrollDown = function () {
  if (window.scrollY >= 200) {
    document.querySelector(".back-to-top").style.display = "block";
  } else {
    document.querySelector(".back-to-top").style.display = "none";
  }
};

window.addEventListener("scroll", scrollDown);
