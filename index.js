import { predpoved } from './data.js';

const mainElement = document.querySelector('main');

mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.pondeli.den}</h2>
    <p>${predpoved.pondeli.datum}</p>
    <p>${predpoved.pondeli.denni_teplota}</p>
    <p>${predpoved.pondeli.ranni_teplota}</p>
    <p>${predpoved.pondeli.odpoledni_teplota}</p>
    <p>${predpoved.pondeli.vecerni_teplota}</p>
    <p>${predpoved.pondeli.stav_pocasi}</p>
    <p>${predpoved.pondeli.tlak}</p>
    <p>${predpoved.pondeli.rychlost_vetru}</p>
    <p>${predpoved.pondeli.popis_pocasi}</p>
    <a href="./detail.html#pondeli">Přečíst celý článek</a>
  </div>
`;

mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.utery.den}</h2>
    <p>${predpoved.utery.datum}</p>
    <p>${predpoved.utery.denni_teplota}</p>
    <p>${predpoved.utery.ranni_teplota}</p>
    <p>${predpoved.utery.odpoledni_teplota}</p>
    <p>${predpoved.utery.vecerni_teplota}</p>
    <p>${predpoved.utery.stav_pocasi}</p>
    <p>${predpoved.utery.tlak}</p>
    <p>${predpoved.utery.rychlost_vetru}</p>
    <p>${predpoved.utery.popis_pocasi}</p>
    <a href="./detail.html#utery">Přečíst celý článek</a>
  </div>
`;
mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.streda.den}</h2>
    <p>${predpoved.streda.datum}</p>
    <p>${predpoved.streda.denni_teplota}</p>
    <p>${predpoved.streda.ranni_teplota}</p>
    <p>${predpoved.streda.odpoledni_teplota}</p>
    <p>${predpoved.streda.vecerni_teplota}</p>
    <p>${predpoved.streda.stav_pocasi}</p>
    <p>${predpoved.streda.tlak}</p>
    <p>${predpoved.streda.rychlost_vetru}</p>
    <p>${predpoved.streda.popis_pocasi}</p>
    <a href="./detail.html#streda">Přečíst celý článek</a>
  </div>
`;

mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.ctvrtek.den}</h2>
    <p>${predpoved.ctvrtek.datum}</p>
    <p>${predpoved.ctvrtek.denni_teplota}</p>
    <p>${predpoved.ctvrtek.ranni_teplota}</p>
    <p>${predpoved.ctvrtek.odpoledni_teplota}</p>
    <p>${predpoved.ctvrtek.vecerni_teplota}</p>
    <p>${predpoved.ctvrtek.stav_pocasi}</p>
    <p>${predpoved.ctvrtek.tlak}</p>
    <p>${predpoved.ctvrtek.rychlost_vetru}</p>
    <p>${predpoved.ctvrtek.popis_pocasi}</p>
    <a href="./detail.html#ctvrtek">Přečíst celý článek</a>
  </div>
`;

mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.patek.den}</h2>
    <p>${predpoved.patek.datum}</p>
    <p>${predpoved.patek.denni_teplota}</p>
    <p>${predpoved.patek.ranni_teplota}</p>
    <p>${predpoved.patek.odpoledni_teplota}</p>
    <p>${predpoved.patek.vecerni_teplota}</p>
    <p>${predpoved.patek.stav_pocasi}</p>
    <p>${predpoved.patek.tlak}</p>
    <p>${predpoved.patek.rychlost_vetru}</p>
    <p>${predpoved.patek.popis_pocasi}</p>
    <a href="./detail.html#patek">Přečíst celý článek</a>
  </div>
`;
mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.sobota.den}</h2>
    <p>${predpoved.sobota.datum}</p>
    <p>${predpoved.sobota.denni_teplota}</p>
    <p>${predpoved.sobota.ranni_teplota}</p>
    <p>${predpoved.sobota.odpoledni_teplota}</p>
    <p>${predpoved.sobota.vecerni_teplota}</p>
    <p>${predpoved.sobota.stav_pocasi}</p>
    <p>${predpoved.sobota.tlak}</p>
    <p>${predpoved.sobota.rychlost_vetru}</p>
    <p>${predpoved.sobota.popis_pocasi}</p>
    <a href="./detail.html#sobota">Přečíst celý článek</a>
  </div>
`;
mainElement.innerHTML += `
  <div class="article-card">
    <h2>${predpoved.nedele.den}</h2>
    <p>${predpoved.nedele.datum}</p>
    <p>${predpoved.nedele.denni_teplota}</p>
    <p>${predpoved.nedele.ranni_teplota}</p>
    <p>${predpoved.nedele.odpoledni_teplota}</p>
    <p>${predpoved.nedele.vecerni_teplota}</p>
    <p>${predpoved.nedele.stav_pocasi}</p>
    <p>${predpoved.nedele.tlak}</p>
    <p>${predpoved.nedele.rychlost_vetru}</p>
    <p>${predpoved.nedele.popis_pocasi}</p>
    <a href="./detail.html#nedele">Přečíst celý článek</a>
  </div>
`;
