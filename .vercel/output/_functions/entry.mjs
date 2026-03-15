import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B_0Ffj_2.mjs';
import { manifest } from './manifest_B0_N22DQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/diagnostic-lead.astro.mjs');
const _page4 = () => import('./pages/auditoria-express.astro.mjs');
const _page5 = () => import('./pages/casos/academia.astro.mjs');
const _page6 = () => import('./pages/casos/corralon.astro.mjs');
const _page7 = () => import('./pages/casos/distribuidora-b2b.astro.mjs');
const _page8 = () => import('./pages/casos/inmobiliaria.astro.mjs');
const _page9 = () => import('./pages/casos/mayorista.astro.mjs');
const _page10 = () => import('./pages/casos/odontologia.astro.mjs');
const _page11 = () => import('./pages/example.astro.mjs');
const _page12 = () => import('./pages/features.astro.mjs');
const _page13 = () => import('./pages/privacidad.astro.mjs');
const _page14 = () => import('./pages/terminos.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/diagnostic-lead.ts", _page3],
    ["src/pages/auditoria-express.astro", _page4],
    ["src/pages/casos/academia.astro", _page5],
    ["src/pages/casos/corralon.astro", _page6],
    ["src/pages/casos/distribuidora-b2b.astro", _page7],
    ["src/pages/casos/inmobiliaria.astro", _page8],
    ["src/pages/casos/mayorista.astro", _page9],
    ["src/pages/casos/odontologia.astro", _page10],
    ["src/pages/example.mdx", _page11],
    ["src/pages/features.astro", _page12],
    ["src/pages/privacidad.astro", _page13],
    ["src/pages/terminos.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3d5cca4b-531c-4e4a-a995-64fb63966fd7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
