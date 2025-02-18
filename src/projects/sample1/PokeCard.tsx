import { Poke, PokeCardProps } from "../../interfaces";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PokeCard = ({ name, url }: PokeCardProps) => {
  const [id, setId] = useState<number>(-1);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const j: Poke = data;
        setId(j.id);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Link
      to={`/pokemon/${name}`}
      className="w-32 transition-all duration"
    >
      {id ? (
        <div ref={cardRef} className="flex flex-col border-2 rounded-xl px-2 pb-2 hover:bg-violet-100 hover:bg-opacity-60 bg-violet-300 bg-opacity-40">
          <img
            alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          />
          <div className="text-center font-semibold">
            {name[0].toUpperCase()}
            {name.substring(1)}
          </div>
        </div>
      ) : null}
    </Link>
  );
};

export default PokeCard;
