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
