import axios from "axios";
import { useState, useEffect } from "react";

interface Planets {
  name: string;
}

const Sample2 = () => {
  const [url, setUrl] = useState<string>("https://swapi.dev/api/planets/");
  const [planets, setPlanets] = useState<Planets[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const { data } = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: url,
      });

      console.log(data);
      setPlanets(data.results);
    };

    getPlanets();
  }, [url]);

  return (
    <div className="bg-slate-600 mt-36 w-full flex justify-center items-center">
      <div>
        <div>
          <select className="text-slate-900 px-2 w-[200px]">
            <option>Select a Planet...</option>
            {planets.map((planet: Planets, i: number) => (
              <option key={`planet_${i}`}>{planet.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sample2;
