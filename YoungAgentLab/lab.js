(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var topicBtns = document.querySelectorAll('[data-topic-filter]');
  var filterable = document.querySelectorAll('[data-topics]');
  var filterHint = document.getElementById('topic-filter-hint');
  var activeTopic = '';

  function setHint(topic) {
    if (!filterHint) return;
    var allLabel = filterHint.getAttribute('data-label-all') || 'Showing all topics';
    var oneLabel = filterHint.getAttribute('data-label-one') || 'Filtered by';
    filterHint.textContent = topic ? oneLabel + ' #' + topic : allLabel;
  }

  function applyTopicFilter(topic) {
    activeTopic = topic || '';
    topicBtns.forEach(function (el) {
      var t = el.getAttribute('data-topic-filter') || '';
      el.classList.toggle('is-active', t === activeTopic);
    });
    filterable.forEach(function (el) {
      if (!activeTopic) {
        el.classList.remove('is-filtered-out');
        return;
      }
      var tags = (el.getAttribute('data-topics') || '').split(/\s+/);
      el.classList.toggle('is-filtered-out', tags.indexOf(activeTopic) === -1);
    });
    setHint(activeTopic);
  }

  topicBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var topic = el.getAttribute('data-topic-filter') || '';
      applyTopicFilter(topic === activeTopic ? '' : topic);
    });
  });

  applyTopicFilter('');
})();

(function () {
  var dropdowns = document.querySelectorAll('.site-dropdown');

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      dd.classList.remove('is-open');
      var btn = dd.querySelector('.site-dropdown__toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  dropdowns.forEach(function (dd) {
    var toggle = dd.querySelector('.site-dropdown__toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) closeAll(dd);
    });
  });

  document.addEventListener('click', function () {
    closeAll(null);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();
