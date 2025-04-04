import { e as createComponent, f as createAstro, h as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate } from './astro/server_BNUdmvqG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Healthcare.gov | </title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/richard/Dev/ASTRO/healthcare-gov/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
