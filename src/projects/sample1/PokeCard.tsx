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
        setId(j.id)
        console.log(j);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="w-full">
      {id ? (
        <div className="border-2 rounded-xl px-2 pb-2 bg-fuchsia-600">
          <img
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <div className="text-center">{name}</div>
        </div>
      ) : null}
    </div>
  );
};

export default PokeCard;
