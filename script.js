const btn = document.querySelector("#btn");
const personagens = document.querySelector("#personagens");

traduzirCondicao = (data) => {
  if (data.status == "unknown") {
    return "Não sabemos";
  } else if (data.status == "Alive") {
    return "Vivo";
  } else {
    return "Morto";
  }
};
gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 826);
};

personagem = () => {
  const recebe = [];
  for (var i = 0; i < 3; i++) {
    let numeroAleatorio = gerarValorAleatorio();
    recebe.push(
      fetch(
        `https://rickandmortyapi.com/api/character/${numeroAleatorio}`
      ).then((response) => response.json())
    );

    Promise.all(recebe).then((data) => {
      const lista = data.reduce((acumulador, data) => {
        acumulador += 
      `<ul>
      <li><img src="${data.image}" alt="${data.name}"></li>
      <li><span>Nome</span>:${data.name}</li>
      <li><span>Espécie</span>:${data.species}</li>
      <li><span>Condição</span>:${traduzirCondicao(data)}</li>
      </ul>`;
        return acumulador;
      }, "");
      personagens.innerHTML = lista;
    });
  };
};

btn.addEventListener("click", () => {
  personagem();
});
