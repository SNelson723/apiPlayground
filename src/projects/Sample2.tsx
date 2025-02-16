import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Planets {
  name: string;
  url: string;
}

interface Planet {
  name: string;
  population: string;
  climate: string;
}

const Sample2 = () => {
  const baseUrl: string = "https://swapi.dev/api/planets/";

  const [url, setUrl] = useState<string>(baseUrl);
  const [planets, setPlanets] = useState<Planets[]>([]);
  const [prev, setPrev] = useState<string | null>(null);
  const [next, setNext] = useState<string | null>(null);
  const [planetUrl, setPlanetUrl] = useState<string>("");
  const [planetData, setPlanetData] = useState<Planet | null>(null);

  useEffect(() => {
    if (url !== null) {
      const getPlanets = async () => {
        const { data } = await axios({
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          url: url,
        });

        setPlanets(data.results);
        setPrev(data.previous);
        setNext(data.next);
      };

      getPlanets();
    }
  }, [url]);

  useEffect(() => {
    if (planetUrl) {
      const getPlanetInfo = async () => {
        try {
          const { data } = await axios({
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            url: planetUrl,
          });

          setPlanetData(data);
        } catch (error) {
          console.log(error);
        }
      };

      getPlanetInfo();
    }
  }, [planetUrl]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanetUrl(e.currentTarget.value);
  };

  const handleReset = () => {
    setPlanetUrl("");
    setPlanetData(null);
    setPlanets([]);
    setUrl(baseUrl);
  };

  return (
    <div className="bg-slate-600 mt-36 w-full flex justify-center items-center">
      <div>
        <div>
          <button
            className="block border-2 px-5 py-1 rounded-md mx-auto mb-4 bg-emerald-600 hover:bg-emerald-300 hover:text-slate-900 transition-all duration-300"
            onClick={handleReset}
          >
            Reset
          </button>
          <div className="mb-1 text-center">Select a Planet</div>
          <div className="flex items-center">
            <div
              className={`border-2 py-1 px-1 rounded-lg ${
                prev === null ? "disabled opacity-50 pointer-events:-none" : ""
              }`}
              onClick={() => setUrl(prev as string)}
            >
              <FaArrowLeft />
            </div>
            <select
              className="text-slate-900 px-2 w-[200px] mx-3 py-0.5"
              onChange={handleChange}
            >
              <option></option>
              {planets.map((planet: Planets, i: number) => (
                <option key={`planet_${i}`} value={planet.url}>
                  {planet.name}
                </option>
              ))}
            </select>
            <div
              className={`border-2 py-1 px-1 rounded-lg ${
                next === null ? "disabled opacity-50 pointer-events-none" : ""
              }`}
              onClick={() => setUrl(next as string)}
            >
              <FaArrowRight />
            </div>
          </div>
          {planetData ? (
            <ul className="ml-10 my-5">
              <li>
                Name: <span className="font-semibold">{planetData.name}</span>
              </li>
              <li>
                Population:{" "}
                <span className="font-semibold">{planetData.population}</span>
              </li>
              <li>
                Climate:{" "}
                <span className="font-semibold">{planetData.climate}</span>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sample2;
