(function () {
  var STORAGE_THEME = "portfolio-theme";
  var STORAGE_LANG = "portfolio-lang";

  function getTheme() {
    return localStorage.getItem(STORAGE_THEME) || "dark";
  }

  function setTheme(theme) {
    theme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    var icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
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
        setTheme(getTheme() === "dark" ? "light" : "dark");
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
