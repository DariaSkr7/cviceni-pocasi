import { predpoved } from './data.js';

const stranka = window.location.hash.slice(1);
const den = predpoved[stranka];

console.log(den);
