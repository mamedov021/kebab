import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <nav className="bg-slate-100 text-black  flex justify-around h-[60px] items-center rounded-[35px] max-[768px]:hidden  ">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "bg-green-700 px-[45px] py-[5px] text-white rounded-[45px]" : ""} text-xl`
        }
        to="/"
      >
        About
      </NavLink>
      <NavLink  className={({ isActive }) =>
          `${isActive ? "bg-green-700 px-[45px] py-[5px] text-white rounded-[45px]" : ""} text-xl`
        } to="/Beverages">Beverages</NavLink>
      <NavLink  className={({ isActive }) =>
          `${isActive ? "bg-green-700 px-[45px] py-[5px] text-white rounded-[45px]" : ""} text-xl`
        } to="/Contact">Contact us</NavLink>
      <NavLink  className={({ isActive }) =>
          `${isActive ? "bg-green-700 px-[45px] py-[5px] text-white rounded-[45px]" : ""} text-xl`
        } to="/Delivery">Delivery</NavLink>
      <NavLink  className={({ isActive }) =>
          `${isActive ? "bg-green-700 px-[45px] py-[5px] text-white rounded-[45px]" : ""} text-xl`
        } to="/Menu"> Menu</NavLink>
    </nav>
  );
};

export default Nav;

