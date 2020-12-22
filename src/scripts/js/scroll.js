var scrollDown = function () {
  if (window.scrollY <= 69) {
    document.querySelector(".back-to-top").style.display = "none";
  } else {
    document.querySelector(".back-to-top").style.display = "block";
  }
};

window.addEventListener("scroll", scrollDown);

function scrollToSecondSection(id){
  document.getElementById(id).scrollIntoView(true);
}

