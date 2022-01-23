import React from "react";
import Layout from "../../components/Layout";
import { getPokemon, getPokemons } from "../../lib/poke";

export default function Basic({ contents }) {
  return (
    <Layout>
      <p>{contents}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pokemons = await getPokemons();
  const paths = pokemons.map((pokemon) => ({
    params: { id: pokemon },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const contents = await getPokemon(params.id);
  return {
    props: {
      contents,
    },
  };
}
