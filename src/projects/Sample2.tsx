import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Planets {
  name: string;
}

const Sample2 = () => {
  const [url, setUrl] = useState<string>("https://swapi.dev/api/planets/");
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [prev, setPrev] = useState<string| null>(null);
  const [next, setNext] = useState<string | null>(null);

  useEffect(() => {
    const getPlanets = async () => {
      console.log(url)
      const { data } = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: url,
      });

      console.log(data);
      setPlanets(data.results);
      setPrev(data.previous);
      setNext(data.next);
    };

    getPlanets();
  }, [url]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className="bg-slate-600 mt-36 w-full flex justify-center items-center">
      <div>
        <div>
          <div className="mb-1 text-center">Select a Planet</div>
          <div className="flex items-center">
            <div className={`border-2 py-1 px-1 rounded-lg ${prev === null ? 'disabled opacity-50': ''}`} onClick={() => setUrl(prev as string)}>
              <FaArrowLeft />
            </div>
            <select
              className="text-slate-900 px-2 w-[200px] mx-3 py-0.5"
              onChange={handleChange}
            >
              <option></option>
              {planets.map((planet: Planets, i: number) => (
                <option key={`planet_${i}`}>{planet.name}</option>
              ))}
            </select>
            <div className={`border-2 py-1 px-1 rounded-lg ${next === null ? 'disabled opacity-50': ''}`} onClick={() => setUrl(next as string)}>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample2;
