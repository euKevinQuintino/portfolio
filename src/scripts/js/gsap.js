gsap.from(".above-the-fold__message", {
  opacity: 0,
  duration: 1.5,
  y: -69,
  ease: "Expo.easeInOut",
});

gsap.from(".above-the-fold__top", {
  opacity: 0,
  x: -69,
  duration: 0.69,
  ease: "Power1.easeInOut",
  delay: 1.5,
});

gsap.from(".above-the-fold__check-more", {
  opacity: 0,
  y: 69,
  duration: 0.69,
  delay: 1.5,
});

gsap.from(".under-the-fold__resume", {
  scrollTrigger: ".under-the-fold__summary",
  opacity: 0,
  x: 69,
  duration: 0.69,
});

gsap.from(".under-the-fold__summary__row__left-column", {
  scrollTrigger: ".under-the-fold__summary__row__left-column",
  opacity: 0,
  y: 100,
  duration: 0.69,
});

gsap.from(".under-the-fold__summary__row__middle-column", {
  scrollTrigger: ".under-the-fold__summary__row__left-column",
  opacity: 0,
  y: 100,
  duration: 0.69,
  delay: 0.1,
});

gsap.from(".under-the-fold__summary__row__right-column", {
  scrollTrigger: ".under-the-fold__summary__row__left-column",
  opacity: 0,
  y: 100,
  duration: 0.69,
  delay: 0.2,
});

gsap.from(".under-the-fold__contact-me__content", {
  scrollTrigger: ".under-the-fold__contact-me__content__e-mail",
  opacity: 0,
  y: -128,
  duration: 0.69,
});

gsap.from(".back-to-top", {
  scrollTrigger: ".under-the-fold__summary",
  opacity: 0,
  y: 69,
  duration: 0.69,
});

gsap.from("footer", {
  scrollTrigger: ".footer",
  opacity: 0,
  y: 256,
  duration: 0.69,
});
