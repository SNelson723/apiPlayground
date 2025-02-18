import axios from "axios";
import { useEffect, useState } from "react";
import { Poke, PokeDetails } from "../../interfaces";
import PokeCard from "./PokeCard";

const Sample1 = () => {
  const url: string = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState<PokeDetails[]>([]);
  const [details, setDetails] = useState<Poke | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setPokemon(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value) {
      axios
        .get(e.currentTarget.value)
        .then(({ data }) => {
          setDetails(data);
        })
        .catch((err) => console.log(err));
    } else {
      setDetails(null);
    }
  };

  const handleReset = () => {
    setPokemon([]);
    setDetails(null);

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
          <div className="grid grid-cols-10">
            {pokemon.map((poke: PokeDetails, i: number) => (
              <PokeCard key={`pokemon_${i}`} name={poke.name} url={poke.url} />
            ))}
          </div>
        </div>
        <div className="mt-4">
          {details ? (
            <ul>
              <li>
                Height : <span className="font-semibold">{details.height}</span>
              </li>
              <li>
                Weight : <span className="font-semibold">{details.weight}</span>
              </li>
              <li>
                Base Experience:{" "}
                <span className="font-semibold">{details.base_experience}</span>
              </li>
              {details.types.map((type, i) => (
                <li key={`type_${i}`}>
                  Type {i + 1}:{" "}
                  <span className="font-semibold">{type.type.name}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/* Maybe a grid? */}
      </div>
    </div>
  );
};

export default Sample1;
