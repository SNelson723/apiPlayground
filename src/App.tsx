import axios from "axios";
import { useEffect, useState } from "react";

interface ClassInfo {
  index: string;
  name: string;
  url: string;
}

interface Proficiencies {
  index: string;
  name: string;
  url: string;
}

interface ClassDetails {
  hit_die: number;
  proficiencies: Proficiencies[];
  // and any other fields I want to use
}

const App = () => {
  const [data, setData] = useState<ClassInfo[]>([]);
  const [classData, setClassData] = useState<ClassDetails | null>(null);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  useEffect(() => {
    if (isResetting) {
      setData([]);
    }

    const fetchClasses = async () => {
      try {
        const { data } = await axios.get("https://www.dnd5eapi.co/api/classes");
        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchClasses();
  }, [isResetting]);

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const getClassData = async () => {
      try {
        const { data } = await axios.get<ClassDetails>(
          `https://www.dnd5eapi.co/api/classes/${e.currentTarget.value}`
        );
        setClassData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getClassData();
  };
  const handleReset = () => {
    setClassData(null);
    setIsResetting(true);
  };

  return (
    <div className="bg-slate-600 h-screen w-screen flex justify-center items-center">
      <div className="text-slate-100">
        <button
          className="block border-2 px-5 py-1 rounded-md mx-auto mb-4 bg-emerald-600 hover:bg-emerald-300 hover:text-slate-900 transition-all duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
        <select className="w-[200px] text-slate-900" onChange={handleClick}>
          <option></option>
          {data.map((info: ClassInfo, i: number) => (
            <option key={`class_${i}`} value={info.index}>
              {info.name}
            </option>
          ))}
        </select>
        <div className="mt-4">
          {classData ? (
            <div className="text-center">
              <div>Starting Hit Die - {classData.hit_die}</div>
              <ul>
                {classData.proficiencies.map(
                  (item: Proficiencies, i: number) => (
                    <li key={`prof_${i}`}>{item.name}</li>
                  )
                )}
              </ul>
            </div>
          ) : (
            <div>Select a class to view details.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
