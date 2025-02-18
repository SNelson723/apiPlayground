import { Poke, PokeCardProps } from "../../interfaces";
import axios from "axios";
import { useState, useEffect } from "react";

const PokeCard = ({ name, url }: PokeCardProps) => {
  const [details, setDetails] = useState({});
  const [id, setId] = useState<number>(-1)

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const j: Poke = data;
        setDetails(j);
        setId(j.id)
        console.log(j);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="w-32">
      {id ? (
        <div className="flex flex-col border-2 rounded-xl px-2 pb-2 bg-violet-300 bg-opacity-40">
          <img
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <div className="text-center font-semibold">{name[0].toUpperCase()}{name.substring(1)}</div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeCard;
