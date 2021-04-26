import Link from "next/link";
import Layout from "../components/Layout";
export default function Home({ pokemonData }) {
  return (
    <Layout title="NextJS Pokedex">
      <h1 className="text-4xl mb-8 text-center ">My Pokedex</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mr-3" />
                <span className="mr-2 font-bold">{index + 1}.</span>
                {pokemon.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemonData = results.map((pokemon, i) => {
      const paddedId = ("00" + (i + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokemon, image };
    });
    return {
      props: { pokemonData },
    };
  } catch (err) {
    console.error(err);
  }
}
