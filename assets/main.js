/* Theme toggle. The initial theme is set by an inline script in <head>
   so there is no flash of the wrong colours before this file loads. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.tog');
  if (!btn) return;

  function paint() {
    var dark = root.getAttribute('data-theme') === 'dark';
    btn.textContent = dark ? '☼' : '☽';
    btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  }
  paint();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    paint();
  });
})();

/* Live GitHub star counts.
   Every [data-repo] element ships with a hardcoded number as its text, so the
   page is correct with JS off and merely goes stale. This refreshes it. */
(function () {
  var nodes = document.querySelectorAll('[data-repo]');
  if (!nodes.length || !window.fetch) return;

  nodes.forEach(function (el) {
    fetch('https://api.github.com/repos/' + el.getAttribute('data-repo'))
      .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
      .then(function (d) {
        if (typeof d.stargazers_count === 'number') {
          el.textContent = d.stargazers_count + ' ★';
        }
      })
      .catch(function () { /* rate-limited or offline: keep the static number */ });
  });
})();

/* Footer year. */
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
