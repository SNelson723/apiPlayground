import axios from "axios";
import { useEffect, useState } from "react";

interface PokeDetails {
  name: string;
  url: string;
  // and any other fields I want to use
}

const Sample1 = () => {
  const url: string = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState<PokeDetails[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);

  console.log(pokemon)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value)
  };

  return (
    <div className="bg-slate-600 mt-36 w-full flex justify-center items-center">
      <div className="text-slate-100">
        <div className="text-slate-900">
          <select onChange={handleChange}>
            <option></option>
            {pokemon.map((poke: PokeDetails, i: number) => (
              <option key={`pokemon_${i}`} value={poke.url}>{poke.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sample1;
