import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BNUdmvqG.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DOl2cfDp.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>ADMIN PAGE (SERVER GENERATED)</h1> <a href="/">Home Page</a> <a href="/about">About Page</a> <a href="/contact">Contact Page</a> ` })}`;
}, "/Users/richard/Dev/ASTRO/healthcare-gov/src/pages/admin.astro", void 0);

const $$file = "/Users/richard/Dev/ASTRO/healthcare-gov/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admin,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
