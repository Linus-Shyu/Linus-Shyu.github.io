/**
 * Golden Gate moonrise — cross-fade timelapse overlay.
 *
 * The four source frames are a time sequence: the full moon drifts from the
 * upper left down to the tip of the near tower. We cross-fade through them on
 * a loop so the drift reads as continuous motion instead of four jumps.
 *
 * Behaviour notes:
 * - Only mounts on the homepage (the element is absent elsewhere), so article
 *   pages pay nothing.
 * - Honours prefers-reduced-motion: holds a single frame instead of animating.
 * - Stops its timer when the tab is hidden, and resumes from the same frame.
 */
(function () {
  'use strict';

  var FRAME_COUNT = 4;
  var FRAME_MS = 4200;
  var FADE_MS = 1600;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    var stage = document.querySelector('.gg-timelapse');
    if (!stage) return;

    var layers = stage.querySelectorAll('.gg-timelapse__frame');
    if (layers.length < 2) return;

    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: pick the frame where the moon meets the tower tip, the
    // composition that reads best as a still.
    if (reduceMotion) {
      stage.classList.add('is-static');
      layers.forEach(function (layer, i) {
        layer.classList.toggle('is-active', i === FRAME_COUNT - 1);
      });
      return;
    }

    var current = 0;
    var timer = null;

    layers[current].classList.add('is-active');

    function advance() {
      var next = (current + 1) % FRAME_COUNT;
      // Keep the outgoing frame visible underneath while the new one fades in,
      // otherwise the dark page background flashes through mid-cross-fade.
      layers[next].classList.add('is-active');
      layers[next].style.zIndex = '2';
      layers[current].style.zIndex = '1';

      var outgoing = layers[current];
      window.setTimeout(function () {
        outgoing.classList.remove('is-active');
      }, FADE_MS);

      current = next;
    }

    function start() {
      if (timer) return;
      timer = window.setInterval(advance, FRAME_MS);
    }

    function stop() {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    }

    start();

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else start();
    });
  });
})();
