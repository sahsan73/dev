"use strict";

const tabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tab-container");
const tabsContent = document.querySelectorAll(".content");

/*
//////////////// OLD SCHOOL WAY ////////////////
tabs.forEach((t) =>
  t.addEventListener("click", function (e) {
    e.preventDefault();
  })
);
*/
// Event Delegation
tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  /*
   * Now, this event listener on the tabsContainer will listen THREE types
   * of events:
   *    1. Click event on span (number) element
   *    2. Click event on tab element
   *    3. Click event on tab_container itself
   *
   * So, we only need to filter out for tab element!
   */
  const clickedTab = e.target.closest(".tab");
  // "closest" method returns null in case any ancestor could not be found with
  // the class ".tab", it will happen when there's a click event on tab_container
  // itself(in this case)
  if (!clickedTab) return; // this is also k/a guard clause

  // Activate tab
  tabs.forEach(t => t.classList.remove("tab--active"));
  clickedTab.classList.add("tab--active");

  // Activate content area
  tabsContent.forEach(c => c.classList.remove("content--active"));
  const contentToActivate = document.querySelector(
    `.content--${clickedTab.dataset.tab}`
  );
  contentToActivate.classList.add("content--active");
});
