(function () {

  /* GSAP animations */

  const secs = document.querySelectorAll(".sec");
  const skillCards = document.querySelectorAll("#skills .card");
  const projectCards = document.querySelectorAll("#projects .card-item");

  gsap.defaults({ duration: 1 });

  [".user-profile", ".user-greetings", ".user-roles"].forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 120,
      delay: 0.25 * i,
      scrollTrigger: el,
    });
  });

  secs.forEach((el, i) => {
    const coverImg = el.querySelector(".cover-img");
    const secHeading = el.querySelector(".sec-title");
    coverImg &&
      gsap.from(coverImg, {
        opacity: 0,
        x: ["100%", "-100%"][i % 2],
        scrollTrigger: el,
      });
    secHeading &&
      gsap.from(secHeading, {
        opacity: 0,
        y: -120,
        scrollTrigger: el,
      });
  });

  skillCards.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      x: 130,
      delay: 0.25 * i,
      scrollTrigger: el.parentElement,
    });
  });

  [".career-years", ".career-position", ".career-place"].forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 120,
      delay: 0.25 * i,
      scrollTrigger: el,
    });
  });

  projectCards.forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      scale: 0.01,
      delay: 0.5 * i,
      scrollTrigger: {
        trigger: el.parentElement,
      },
    });
  });

  gsap.from("#footer .right-div", {
    x: "100%",
    scrollTrigger: "#footer",
  });

  gsap.from("#footer .footer-credit", {
    y: 200,
    duration: 0.5,
    scrollTrigger: "#footer",
  });
})();
