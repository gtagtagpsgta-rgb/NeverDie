/* Прелоадер: держит страницу, пока не готова сцена-фон */
(function () {
  var pre = document.getElementById('preloader');
  var fill = document.getElementById('preloaderFill');
  if (!pre) return;

  document.body.classList.add('is-loading');

  var pct = 0;
  var timer = setInterval(function () {
    pct += Math.random() * 14 + 6;
    if (pct > 92) pct = 92;
    if (fill) fill.style.width = pct.toFixed(0) + '%';
  }, 90);

  var scene = null;
  try {
    scene = Array.prototype.slice
      .call(document.getElementsByClassName('bg-scene'))
      .map(function (el) {
        return window.getComputedStyle(el).backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
      })
      .filter(Boolean);
  } catch (e) { /* ignore */ }

  var probes = [];
  scene.forEach(function (url) {
    if (!url || url === 'none') return;
    var img = new Image();
    img.src = url;
    probes.push(img);
  });

  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();

  Promise.all([fontsReady].concat(probes.map(function (img) {
    return img.decode ? img.decode().catch(function () {}) : Promise.resolve();
  }))).then(function () {
    pct = 100;
    if (fill) fill.style.width = '100%';
    setTimeout(finish, 160);
  });

  // Страховка: если что-то зависло — всё равно показываем сайт
  setTimeout(finish, 4000);

  function finish() {
    clearInterval(timer);
    document.body.classList.remove('is-loading');
    pre.classList.add('done');
    setTimeout(function () { pre.remove(); }, 700);
  }
})();