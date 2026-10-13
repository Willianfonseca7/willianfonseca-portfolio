import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { render, prerenderRoutes } from "../dist-ssr/entry-server.js";

const template = await readFile(resolve("dist/index.html"), "utf8");
const root = '<div id="root"></div>';
if (!template.includes(root)) throw new Error("Prerender: root placeholder is missing.");
for (const route of prerenderRoutes) {
  const content = render(route);
  if ((content.match(/<h1[\s>]/g) ?? []).length !== 1) {
    throw new Error(`Prerender: expected one H1 for ${route}.`);
  }
  const canonical = `https://willianfonseca7.github.io/willianfonseca-portfolio${route === "/" ? "/" : route}`;
  const html = template
    .replace(root, `<div id="root" data-prerender-path="${route}">${content}</div>`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]+/, `$1${canonical}`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]+/, `$1${canonical}`);
  const destination = resolve("dist", route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
console.log(`Prerender: generated ${prerenderRoutes.length} German pages.`);
