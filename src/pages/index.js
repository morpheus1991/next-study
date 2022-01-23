import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getPokemons } from "../lib/poke";

export default function Home({ contents }) {
  console.log("contents:", contents);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <div>mainpage</div>
          <ul>
            {contents &&
              contents.map((item) => (
                <li>
                  <Link href={`pokemons/${item}`}>{item}</Link>
                </li>
              ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const pokemons = await getPokemons();

  return {
    props: {
      contents: pokemons,
    },
  };
}
