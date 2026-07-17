(() => {
  'use strict';

  const root = document.documentElement;
  const breakpoints = Object.freeze({ mobile: 768, tablet: 1024 });
  const touchQuery = window.matchMedia('(hover: none), (pointer: coarse)');
  let frame = 0;
  let previous = '';

  function viewportSize() {
    const viewport = window.visualViewport;
    return {
      width: Math.round(viewport?.width || window.innerWidth || root.clientWidth || screen.width),
      height: Math.round(viewport?.height || window.innerHeight || root.clientHeight || screen.height)
    };
  }

  function classify(width, height) {
    const shortestSide = Math.min(width, height);
    const longestSide = Math.max(width, height);

    // A real touch phone remains mobile after rotation, even when its
    // landscape width is wider than the normal mobile breakpoint.
    if (touchQuery.matches && shortestSide < 600 && longestSide < 1200) return 'mobile';
    if (width < breakpoints.mobile) return 'mobile';
    if (width < breakpoints.tablet) return 'tablet';
    return 'desktop';
  }

  function updateDevice() {
    frame = 0;
    const { width, height } = viewportSize();
    const device = classify(width, height);
    const orientation = width >= height ? 'landscape' : 'portrait';
    const input = touchQuery.matches ? 'touch' : 'pointer';
    const signature = `${device}:${orientation}:${input}:${width}x${height}`;

    root.dataset.device = device;
    root.dataset.orientation = orientation;
    root.dataset.input = input;
    root.style.setProperty('--viewport-width', `${width}px`);
    root.style.setProperty('--viewport-height', `${height}px`);
    root.classList.add('device-ready');

    if (signature !== previous) {
      previous = signature;
      window.dispatchEvent(new CustomEvent('devicechange', {
        detail: { device, orientation, input, width, height }
      }));
    }
  }

  function scheduleUpdate() {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateDevice);
  }

  updateDevice();
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  window.addEventListener('orientationchange', scheduleUpdate, { passive: true });
  window.visualViewport?.addEventListener('resize', scheduleUpdate, { passive: true });
  touchQuery.addEventListener?.('change', scheduleUpdate);
})();

/* Layout integrity v3.0.2: fit the two long hero words to the actual
   width of the text column after fonts, orientation and viewport settle. */
(() => {
  'use strict';

  const root = document.documentElement;
  let fitFrame = 0;

  function titleLimits() {
    switch (root.dataset.device) {
      case 'mobile': return { min: 27, max: 49 };
      case 'tablet': return { min: 42, max: 74 };
      default: return { min: 48, max: 82 };
    }
  }

  function fitHeroTitle() {
    fitFrame = 0;
    const copy = document.querySelector('.hero-copy');
    const title = document.getElementById('hero-title');
    const words = title ? Array.from(title.querySelectorAll(':scope > span')) : [];
    if (!copy || !title || !words.length) return;

    const available = Math.max(0, Math.floor(copy.getBoundingClientRect().width) - 12);
    if (!available) return;

    const { min, max } = titleLimits();
    let low = min;
    let high = max;

    title.style.setProperty('--hero-title-size', `${max}px`);

    for (let i = 0; i < 9; i += 1) {
      const middle = (low + high) / 2;
      title.style.setProperty('--hero-title-size', `${middle}px`);
      const fits = words.every((word) => {
        const range = document.createRange();
        range.selectNodeContents(word);
        const width = range.getBoundingClientRect().width;
        range.detach?.();
        return width <= available + 1;
      });
      if (fits) low = middle;
      else high = middle;
    }

    title.style.setProperty('--hero-title-size', `${Math.floor(low * 10) / 10}px`);
  }

  function scheduleHeroFit() {
    if (fitFrame) cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(fitHeroTitle);
  }

  window.addEventListener('DOMContentLoaded', scheduleHeroFit, { once: true });
  window.addEventListener('load', scheduleHeroFit, { once: true });
  window.addEventListener('devicechange', scheduleHeroFit);
  window.addEventListener('resize', scheduleHeroFit, { passive: true });
  window.addEventListener('orientationchange', scheduleHeroFit, { passive: true });
  document.fonts?.ready.then(scheduleHeroFit).catch(() => {});
})();
