(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  var mq = window.matchMedia("(min-width: 760px)");

  function labels() {
    var content = window.SITE_CONTENT && window.SITE_CONTENT.nav;
    return {
      open: (content && content.menuOpen) || "Open menu",
      close: (content && content.menuClose) || "Close menu",
    };
  }

  function setOpen(open, opts) {
    opts = opts || {};
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var L = labels();
    toggle.setAttribute("aria-label", open ? L.close : L.open);
    if (open) {
      var first = nav.querySelector("a");
      if (first) first.focus();
    } else if (opts.returnFocus !== false) {
      toggle.focus();
    }
  }

  function isOpen() {
    return nav.classList.contains("is-open");
  }

  function close(opts) {
    if (isOpen()) setOpen(false, opts);
  }

  toggle.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      close({ returnFocus: false });
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") close();
  });

  function onViewportChange() {
    if (mq.matches) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      var L = labels();
      toggle.setAttribute("aria-label", L.open);
    }
  }

  if (mq.addEventListener) mq.addEventListener("change", onViewportChange);
  else if (mq.addListener) mq.addListener(onViewportChange);
})();
