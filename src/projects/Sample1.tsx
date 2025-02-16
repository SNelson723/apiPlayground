import axios from "axios";
import { useEffect, useState } from "react";

interface PokeDetails {
  name: string;
  url: string;
  // and any other fields I want to use
}

interface Poke {
  base_experience: number;
  weight: number;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

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
    <div className="bg-slate-600 mt-36 w-full flex justify-center items-center">
      <div className="text-slate-100">
        <button
          className="block border-2 px-5 py-1 rounded-md mx-auto mb-4 bg-emerald-600 hover:bg-emerald-300 hover:text-slate-900 transition-all duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="text-center mb-2">Select a Pokemon</div>
        <div className="text-slate-900">
          <select className="w-[150px]" onChange={handleChange}>
            <option></option>
            {pokemon.map((poke: PokeDetails, i: number) => (
              <option key={`pokemon_${i}`} value={poke.url}>
                {poke.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          {details ? (
            <div>
              <div>
                Height :<span>{details.height}</span>
              </div>
              <div>
                Weight :<span>{details.weight}</span>
              </div>
              <div>
                Base Experience: <span>{details.base_experience}</span>
              </div>
              <div>
                Type: <span>{details.types[0].type.name}</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sample1;
