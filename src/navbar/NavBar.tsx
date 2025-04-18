import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="border text-center py-2 mx-5 rounded-b-md hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="sample1" className="px-5 mx-5">
          Sample 1
        </NavLink>
      </div>
      <div className=" border text-center rounded-b-md mx-5 py-2 hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="sample2" className="px-5 mx-5">
          Sample 2
        </NavLink>
      </div>
      <div className=" border text-center rounded-b-md mx-5 py-2 hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="sample3" className="px-5 mx-5">
          Sample 3
        </NavLink>
      </div>
      <div className=" border text-center rounded-b-md mx-5 py-2 hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="sample4" className="px-5 mx-5">
          Sample 4
        </NavLink>
      </div>
      <div className=" border text-center rounded-b-md mx-5 py-2 hover:bg-green-300 hover:text-black animate-all duration-500 bg-emerald-500">
        <NavLink to="sample5" className="px-5 mx-5">
          Sample 5
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
