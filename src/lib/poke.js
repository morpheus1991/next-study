export const getPokemons = () => {
  const response = fetch("https://pokeapi.co/api/v2/ability/1")
    .then((res) => res.json())
    .then((res) => res.pokemon)
    .then((res) => res.map((pokemon) => pokemon.pokemon.name));
  return response;
};

export const getPokemon = (name) => {
  const response = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => res.json())
    .then((res) => res.name)
    .catch((e) => console.log(e));

  return response;
};
