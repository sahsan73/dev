"use strict";

/////////////////////////////////////////////////////////////////////////
// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
  const [ent] = entries;
  if (ent.isIntersecting) {
    document.body.classList.remove("sticky");
  } else {
    document.body.classList.add("sticky");
  }
});

obs.observe(sectionHeroEl);

/////////////////////////////////////////////////////////////////////////
// SMOOTH SCROLLING

/*
////////////// OLD WAY //////////////
const linkOperation = document.querySelector(".link--operation");
linkOperation.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(window.scrollX, window.scrollY);
  // e.target === linkOperation === this
  // console.log(e.target.getBoundingClientRect());
  const sectionEl = document.querySelector(".section-operation");
  const sectionCoords = sectionEl.getBoundingClientRect();
  console.log(sectionCoords);
  // window.scrollTo(
  //   window.scrollX + sectionCoords.left,
  //   window.screenY + sectionCoords.top
  // );
  window.scrollTo({
    left: window.scrollX + sectionCoords.left,
    top: window.screenY + sectionCoords.top,
    behavior: "smooth",
  });
});
*/

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    /*
     * Since anchor elements have set the "href attributes, by default,
     * it will jump to the that part of the page
     */
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector(".logo").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
