import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { getPokemon, getPokemons } from "../../lib/poke";

export default function Basic({ contents }) {
  return (
    <Layout>
      <div>
        <Head>
          <title>{contents}</title>
        </Head>
        <p>{contents}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pokemons = await getPokemons(); //["파이리","꼬부기","피카츄"]
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
