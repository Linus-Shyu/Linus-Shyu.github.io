/**
 * Golden Gate moonrise — shared timelapse driver for the standalone subsites
 * (causelink / feelflow / starfetch).
 *
 * The four frames are one time sequence: the full moon drifts from the upper
 * left down onto the tip of the near tower. Cross-fading them makes the drift
 * read as continuous motion rather than four separate photos.
 *
 * Deliberately dependency-free and defensive: if the markup is absent the
 * script exits quietly, so a page without the hero suffers no cost.
 */
(function () {
  'use strict';

  var FRAME_MS = 5200;
  var FADE_MS = 1900;

  function init() {
    var root = document.querySelector('.gg-hero-bg');
    if (!root) return;

    var frames = root.querySelectorAll('.gg-hero__frame');
    if (frames.length < 2) return;

    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function activate(index) {
      frames[index].classList.add('is-active');
    }

    if (reduceMotion) {
      // Hold the final frame: the moon rests on the tower tip.
      activate(frames.length - 1);
      root.classList.add('is-static');
      return;
    }

    var current = 0;
    var timer = null;
    activate(current);

    function advance() {
      var next = (current + 1) % frames.length;
      // The incoming frame fades in above the outgoing one, so the backdrop
      // never flashes through mid-transition.
      frames[next].style.zIndex = '2';
      frames[current].style.zIndex = '1';
      activate(next);

      var outgoing = frames[current];
      setTimeout(function () {
        outgoing.classList.remove('is-active');
      }, FADE_MS);

      current = next;
    }

    function start() {
      if (timer) return;
      timer = setInterval(advance, FRAME_MS);
    }

    function stop() {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    }

    start();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop();
      else start();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
