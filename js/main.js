/* FlexVara — flexvara-co.vercel.app */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* Order dock: shows once the hero buttons scroll past,
     hides again across the pricing tiers so it never masks them. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var passed = false;
    var overPrices = false;
    function refresh() {
      dock.classList.toggle("show", passed && !overPrices);
    }
    var top = document.getElementById("hero-gos");
    if (top) {
      new IntersectionObserver(
        function (entries) {
          passed = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          refresh();
        },
        { threshold: 0 }
      ).observe(top);
    }
    var prices = document.getElementById("prices");
    if (prices) {
      new IntersectionObserver(
        function (entries) {
          overPrices = entries[0].isIntersecting;
          refresh();
        },
        { threshold: 0 }
      ).observe(prices);
    }
  }
})();
