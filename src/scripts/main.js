//gsap.registerPlugin(ScrollTrigger);
//above the fold
gsap.from(".above-the-fold__message", {
  opacity: 0,
  duration: 1.5,
  y: -64,
});

gsap.from(".above-the-fold__top", {
  opacity: 0,
  x: -64,
  duration: 0.64,
  delay: 1.28,
});

gsap.from(".above-the-fold__check-more", {
  opacity: 0,
  y: 64,
  duration: 0.64,
  delay: 1.28,
});

//resume
gsap.from(".under-the-fold__resume", {
  scrollTrigger: {
    trigger: ".under-the-fold__resume",
    start: "top bottom",
  },
  opacity: 0,
  x: 64,
  duration: 0.96,
});

gsap.from(".under-the-fold__summary__row__left-column", {
  scrollTrigger: { trigger: ".under-the-fold__resume", start: "top center" },
  opacity: 0,
  y: 100,
  duration: 0.96,
});

gsap.from(".under-the-fold__summary__row__middle-column", {
  scrollTrigger: { trigger: ".under-the-fold__resume", start: "top center" },
  opacity: 0,
  y: 100,
  duration: 0.96,
  delay: 0.064,
});

gsap.from(".under-the-fold__summary__row__right-column", {
  scrollTrigger: { trigger: ".under-the-fold__resume", start: "top center" },
  opacity: 0,
  y: 100,
  duration: 0.96,
  delay: 0.124,
});

//contact
gsap.from(".under-the-fold__contact-me__content", {
  scrollTrigger: {
    trigger: ".under-the-fold__contact-me__content",
    start: "top bottom",
  },
  opacity: 0,
  duration: 0.96,
});

gsap.from(".back-to-top", {
  scrollTrigger: ".under-the-fold__summary",
  opacity: 0,
  y: 64,
  duration: 0.64,
});

//achievements
gsap.from(".under-the-fold__achievements__graduations__item", {
  scrollTrigger: {
    trigger: ".under-the-fold__achievements__graduations",
    start: "top bottom",
  },
  opacity: 0,
  x: -64,
  duration: 0.96,
});

gsap.from(".under-the-fold__achievements__certifications__item", {
  scrollTrigger: {
    trigger: ".under-the-fold__achievements__certifications",
    start: "top bottom",
  },
  opacity: 0,
  x: -64,
  duration: 0.96,
  delay: 0.64,
});

gsap.from(".under-the-fold__achievements__books__item", {
  scrollTrigger: {
    trigger: ".under-the-fold__achievements__books",
    start: "top bottom",
  },
  opacity: 0,
  y: 64,
  duration: 1.24,
  delay: 0.64,
});

//footer
/*gsap.from(".footer__social-media", {
  scrollTrigger: {
    trigger: ".footer__social-media",
    start: "top bottom"
  },
  opacity: 0,
  y: 256,
  duration: 0.64
});*/

/*gsap.from(".footer__message", {
  scrollTrigger: {
    trigger: ".under-the-fold__contact-me__content__location",
    start: "top center"
  },
  opacity: 0,
  y: 256,
  duration: 0.64
});*/

function toHome() {
  window.location.reload();
}

var toggleBackToTop = function () {
  if (window.scrollY <= 69) {
    document.querySelector(".back-to-top").style.display = "none";
  } else {
    document.querySelector(".back-to-top").style.display = "block";
  }
};
window.addEventListener("scroll", toggleBackToTop);

function ScrollTo(id) {
  document.getElementById(id).scrollIntoView(true);
}
