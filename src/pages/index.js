import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getPokemons } from "../lib/poke";

export default function Home({ contents }) {
  console.log(getPokemons());
  const [pokeList, setList] = useState([]);
  useEffect(async () => {
    const pokemons = await getPokemons();
    setList(pokemons);
  }, []);
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
            {pokeList &&
              pokeList.map((item) => (
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
