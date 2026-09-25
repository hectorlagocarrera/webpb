// Copia a assets/fonts solo los archivos de fuente que usa la web (alojadas en el propio dominio, sin Google Fonts).
import { copyFileSync, mkdirSync } from 'node:fs';

const files = [
  ['@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2', 'playfair-display-latin-wght-normal.woff2'],
  ['@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2', 'playfair-display-latin-wght-italic.woff2'],
  ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter-latin-wght-normal.woff2'],
];

mkdirSync('assets/fonts', { recursive: true });
for (const [from, to] of files) copyFileSync(`node_modules/${from}`, `assets/fonts/${to}`);
console.log(`Copiadas ${files.length} fuentes a assets/fonts`);
