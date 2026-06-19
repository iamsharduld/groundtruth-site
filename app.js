// GroundTruth — restrained progressive enhancement.
// Content is fully visible without JS; this only adds gentle scroll reveals.
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  // Elements worth a soft entrance — one per "thought", not everything.
  var targets = document.querySelectorAll(
    ".facts li, .aside, .timeline li, .steps li, .cost-line, .chart, .shots .shot, " +
    ".checks li, .takeaway, .faq-item"
  );

  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    // small stagger within a group, capped so nothing lags
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + "ms";
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  targets.forEach(function (el) { io.observe(el); });

  // Safety net: nothing should ever stay hidden. If the observer never fires
  // for an element (edge cases, atypical viewports), reveal it after a beat.
  window.setTimeout(function () {
    targets.forEach(function (el) {
      if (!el.classList.contains("in")) {
        el.style.transitionDelay = "0ms";
        el.classList.add("in");
      }
    });
  }, 2400);
})();
