(() => {
  'use strict';
  var e = {
      230(e, r, t) {
        function n(e) {
          if (!e.trim()) throw new Error('name must not be empty');
          return `Hello, ${e}!`;
        }
        t.d(r, { b: () => n });
      },
    },
    r = {};
  function t(n) {
    var o = r[n];
    if (void 0 !== o) return o.exports;
    var i = (r[n] = { exports: {} });
    return e[n](i, i.exports, t), i.exports;
  }
  (t.d = (e, r) => {
    for (var n in r)
      t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r));
  const n = window.wp.element,
    o = window.wp.i18n;
  var i = t(230);
  const s = window.ReactJSXRuntime,
    c = () => {
      const e = (0, i.b)((0, o.__)('WP Bones', 'wp-kirk'));
      return (0, s.jsxs)('section', {
        children: [
          (0, s.jsx)('h2', { children: e }),
          (0, s.jsx)('p', {
            children: (0, o.__)(
              'This React bundle ships with TypeScript and WordPress i18n, auto-discovered by webpack.',
              'wp-kirk'
            ),
          }),
        ],
      });
    },
    p = document.getElementById('react-app');
  p && (0, n.createRoot)(p).render((0, s.jsx)(c, {}));
})();
