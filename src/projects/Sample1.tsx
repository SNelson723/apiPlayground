import axios from "axios";
import { useEffect, useState } from "react";

interface Info {
  index: string;
  name: string;
  url: string;
}

interface ClassDetails {
  hit_die: number;
  proficiencies: Info[];
  // and any other fields I want to use
}

const Sample1 = () => {
  const [data, setData] = useState<Info[]>([]);
  const [classData, setClassData] = useState<ClassDetails | null>(null);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>("");

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value.length) {
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

      setSelectedClass(e.currentTarget.value);
      getClassData();
    } else {
      handleReset();
    }
  };
  const handleReset = () => {
    setClassData(null);
    setIsResetting(true);
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
        <select className="w-[200px] text-slate-900" onChange={handleChange}>
          <option></option>
          {data.map((info: Info, i: number) => (
            <option
              key={`class_${i}`}
              value={info.index}
              onClick={() => console.log(info.name)}
            >
              {info.name}
            </option>
          ))}
        </select>
        <div className="mt-4">
          {classData ? (
            <div className="text-center">
              <div className="mb-3">
                Starting Hit Die -{" "}
                <span className="font-bold">{classData.hit_die}</span>
              </div>
              <div className="font-semibold underline mb-2">
                {selectedClass.substring(0, 1).toUpperCase() +
                  selectedClass.substring(1)}{" "}
                Proficiencies
              </div>
              <ul>
                {classData.proficiencies.map((item: Info, i: number) => (
                  <li key={`prof_${i}`}>{item.name}</li>
                ))}
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

export default Sample1;
