import { minify } from 'html-minifier-terser';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

function minificarHtmlExplicito() {
  return {
    name: 'minificar-html-explicito',
    apply: 'build',
    async closeBundle() {
      const caminhoIndex = resolve(process.cwd(), 'dist/index.html');
      const html = await readFile(caminhoIndex, 'utf8');
      const minificado = await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        keepClosingSlash: true
      });
      await writeFile(caminhoIndex, minificado);
    }
  };
}

export default defineConfig({
  base: '/rede-solidaria/',
  plugins: [minificarHtmlExplicito()]
});
