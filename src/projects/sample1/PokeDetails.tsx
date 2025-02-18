import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Poke } from "../../interfaces";

const PokeDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [details, setDetails] = useState<Poke | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(({ data }) => setDetails(data))
        .catch((err) => console.error(err));
    }
  }, [name]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="text-slate-100 p-8">
      <div className="mt-4">
        {details ? (
          <div>
            <button className="px-2 py-1 border-2 rounded-lg bg-emerald-500 hover:bg-emerald-300 hover:text-slate-900 transition-all duration-300" onClick={() => navigate(-1)}>
              Go Back
            </button>
            <h1 className="text-center text-2xl font-bold mb-4">
              {details.name[0].toUpperCase() + details.name.substring(1)}
            </h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`}
              alt={details.name}
              className="mx-auto mb-4"
            />
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PokeDetails;
