/* Мелкие частицы на фоне: тихо дрейфующие точки, как пыль в свете */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var canvas = document.getElementById('particles');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0, h = 0, particles = [];

  var COUNT = 46;

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    particles = [];
    for (var i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.5,        // мелкая крупинка
        vy: -(0.05 + Math.random() * 0.16),   // медленный подъём
        vx: (Math.random() - 0.5) * 0.10,
        a: 0.10 + Math.random() * 0.28,
        ph: Math.random() * Math.PI * 2,
        sp: 0.4 + Math.random() * 0.9         // скорость мерцания
      });
    }
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.y += p.vy;
      p.x += p.vx + Math.sin(t / 2600 + p.ph) * 0.16;

      if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
      if (p.x < -12) p.x = w + 12;
      if (p.x > w + 12) p.x = -12;

      var tw = p.a * (0.55 + 0.45 * Math.sin(t / 1000 * p.sp + p.ph));

      var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.4);
      g.addColorStop(0, 'rgba(147, 197, 253, ' + tw.toFixed(3) + ')');
      g.addColorStop(0.45, 'rgba(96, 165, 250, ' + (tw * 0.32).toFixed(3) + ')');
      g.addColorStop(1, 'rgba(96, 165, 250, 0)');

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.4, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 180);
  });

  resize();
  requestAnimationFrame(frame);
})();