(function () {
  var STORAGE_THEME = "portfolio-theme";
  var STORAGE_LANG = "portfolio-lang";

  function getTheme() {
    var theme = localStorage.getItem(STORAGE_THEME) || "medialab";
    if (theme === "light" || theme === "polyu" || theme === "medialab" || theme === "dark") return theme;
    return "medialab";
  }

  function mediaLabIconHtml() {
    var cells = "";
    for (var i = 0; i < 49; i++) cells += "<i></i>";
    return cells;
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "polyu" && theme !== "medialab") theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    var icon = document.getElementById("themeIcon");
    if (icon) {
      icon.classList.remove("theme-icon--polyu", "theme-icon--medialab");
      if (theme === "polyu") {
        icon.classList.add("theme-icon--polyu");
        icon.innerHTML =
          '<img src="/portfolio/img/polyu-symbol.png" alt="" width="18" height="20" decoding="async">';
      } else if (theme === "medialab") {
        icon.classList.add("theme-icon--medialab");
        icon.innerHTML = mediaLabIconHtml();
      } else {
        icon.textContent = theme === "light" ? "☀️" : "🌙";
      }
    }
    var btn = document.getElementById("themeToggle");
    if (btn) {
      var label =
        theme === "medialab"
          ? "MIT Media Lab theme"
          : theme === "polyu"
            ? "PolyU theme"
            : theme === "light"
              ? "Light theme"
              : "Dark theme";
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    }
  }

  function nextTheme(theme) {
    if (theme === "dark") return "light";
    if (theme === "light") return "polyu";
    if (theme === "polyu") return "medialab";
    return "dark";
  }

  function getLang() {
    return localStorage.getItem(STORAGE_LANG) || (navigator.language && navigator.language.indexOf("zh") === 0 ? "zh" : "en");
  }

  function getNested(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length && cur != null; i++) cur = cur[parts[i]];
    return cur;
  }

  function applyLang(lang) {
    lang = lang === "zh" ? "zh" : "en";
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem(STORAGE_LANG, lang);

    var t = window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[lang];
    if (!t) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = getNested(t, key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-ui]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ui");
      var val = getNested(t, "ui." + key);
      if (val != null) el.textContent = val;
    });

    var currentLangText = document.getElementById("currentLangText");
    if (currentLangText) currentLangText.textContent = lang === "zh" ? "中文" : "English";
  }

  function toggleLangDropdown() {
    var dd = document.getElementById("langDropdown");
    if (dd) dd.classList.toggle("active");
  }

  function closeLangDropdown() {
    var dd = document.getElementById("langDropdown");
    if (dd) dd.classList.remove("active");
  }

  function init() {
    setTheme(getTheme());
    applyLang(getLang());

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        setTheme(nextTheme(getTheme()));
      });
    }

    var langBtn = document.getElementById("langToggle");
    var langDropdown = document.getElementById("langDropdown");
    if (langBtn && langDropdown) {
      langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        toggleLangDropdown();
      });
      document.querySelectorAll(".lang-option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          applyLang(btn.dataset.lang);
          closeLangDropdown();
        });
      });
      document.addEventListener("click", closeLangDropdown);
    }

    var backToTop = document.getElementById("backToTop");
    if (backToTop) {
      function updateBackToTop() {
        if (window.scrollY > 400) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      }
      window.addEventListener("scroll", updateBackToTop, { passive: true });
      updateBackToTop();
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    initProjectCoverTilt();
  }

  function initProjectCoverTilt() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    var maxTilt = 10;
    var cards = document.querySelectorAll(".project-block--media");

    cards.forEach(function (card) {
      var glare = document.createElement("span");
      glare.className = "project-media-glare";
      glare.setAttribute("aria-hidden", "true");
      card.appendChild(glare);

      var frame = 0;

      function onMove(e) {
        var rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var rotateY = (px - 0.5) * (maxTilt * 2);
        var rotateX = (0.5 - py) * (maxTilt * 2);

        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(function () {
          card.classList.add("is-tilting");
          card.style.transform =
            "perspective(1000px) rotateX(" +
            rotateX.toFixed(2) +
            "deg) rotateY(" +
            rotateY.toFixed(2) +
            "deg) scale3d(1.03, 1.03, 1.03)";
          glare.style.background =
            "radial-gradient(circle at " +
            (px * 100).toFixed(1) +
            "% " +
            (py * 100).toFixed(1) +
            "%, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 32%, transparent 62%)";
        });
      }

      function onLeave() {
        if (frame) cancelAnimationFrame(frame);
        card.classList.remove("is-tilting");
        card.style.transform = "";
        glare.style.background = "";
      }

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
