import axios from "axios";
import { useEffect, useState } from "react";
import { PokeDetails } from "../../interfaces";
import PokeCard from "./PokeCard";

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
  }, []);

  const handleReset = () => {
    setPokemon([]);

    axios
      .get(url)
      .then(({ data }) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-slate-600 mt-24 w-full flex justify-center items-center">
      <div className="text-slate-100">
        <button
          className="block border-2 px-5 py-1 rounded-md mx-auto mb-4 bg-emerald-600 hover:bg-emerald-300 hover:text-slate-900 transition-all duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="text-center mb-2">Select a Pokemon</div>
        <div className="text-slate-900">
          <div className="grid grid-cols-8 gap-8">
            {pokemon.map((poke: PokeDetails, i: number) => (
              <PokeCard key={`pokemon_${i}`} name={poke.name} url={poke.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample1;
