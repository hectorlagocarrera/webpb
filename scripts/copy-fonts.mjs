// Copia a assets/fonts solo los archivos de fuente que usa la web (alojadas en el propio dominio, sin Google Fonts).
import { copyFileSync, mkdirSync } from 'node:fs';

const files = [
  ['@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2', 'fraunces-latin-wght-normal.woff2'],
  ['@fontsource-variable/fraunces/files/fraunces-latin-wght-italic.woff2', 'fraunces-latin-wght-italic.woff2'],
  ['@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', 'manrope-latin-wght-normal.woff2'],
];

mkdirSync('assets/fonts', { recursive: true });
for (const [from, to] of files) copyFileSync(`node_modules/${from}`, `assets/fonts/${to}`);
console.log(`Copiadas ${files.length} fuentes a assets/fonts`);
