import { NavLink } from "react-router-dom";

const baseClass =
  "border text-center py-2 mx-5 px-10 rounded-b-md animate-all duration-500 bg-emerald-500 hover:bg-green-300 hover:text-black font-semibold";
const activeClass = "bg-green-300 text-black";

interface NavLinkProps {
  to: string;
  label: string;
}

const navLinks: NavLinkProps[] = [
  { to: "sample1", label: "Sample 1" },
  { to: "sample2", label: "Sample 2" },
  { to: "sample3", label: "Sample 3" },
  { to: "sample4", label: "Sample 4" },
  { to: "sample5", label: "Sample 5" },
];

// The isActive prop is used to determine if the link is currently active
// it's a built in React Router feature for the NavLink component
// This can help style based on whether the to property is the same as the current URL
const NavBar = () => (
  <div className="w-full flex justify-center">
    {navLinks.map((link: NavLinkProps) => (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : ""}`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavBar;
