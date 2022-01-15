const btn = document.querySelector("#btn");
const primeiroP = document.querySelector("#primeiroPersonagem");
const segundoP = document.querySelector("#segundoPersonagem");
const terceiroP = document.querySelector("#terceiroPersonagem");

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 826);
};

function primeiroPersonagem() {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      primeiroP.innerHTML = `
      <img src="${data.image}" alt="${data.name}">
      <ul>
      <li><span>Nome</span>:${data.name}</li>
      <li><span>Espécie</span>:${data.species}</li>
      <li><span>Status</span>:${data.status}</li>
      </ul>`;
    });
}
function segundoPersonagem() {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      segundoP.innerHTML = ` <img src="${data.image}" alt="${data.name}">
      <ul>
      <li><span>Nome</span>:${data.name}</li>
      <li><span>Espécie</span>:${data.species}</li>
      <li><span>Status</span>:${data.status}</li>
      </ul>`;
    });
}
function terceiroPersonagem() {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      terceiroP.innerHTML = ` <img src="${data.image}" alt="${data.name}">
      <ul>
      <li><span>Nome</span>:${data.name}</li>
      <li><span>Espécie</span>:${data.species}</li>
      <li><span>Status</span>:${data.status}</li>
      </ul>`;
    });
}

btn.addEventListener("click", () => {
  primeiroPersonagem();
  segundoPersonagem();
  terceiroPersonagem();
});
