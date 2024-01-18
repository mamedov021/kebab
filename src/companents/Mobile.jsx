import { NavLink } from "react-router-dom";
 
const Mobile = () => {
    return (
        <nav className="bg-gray-700 text-black  flex flex-col justify-around  items-center    ">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "bg-green-700 px-[25px] py-[5px] text-white rounded-[25px]" : ""} text-xl`
            }
            to="/"
          >
            About
          </NavLink>
          <NavLink  className={({ isActive }) =>
              `${isActive ? "bg-green-700 px-[25px] py-[5px] text-white rounded-[25px]" : ""} text-xl`
            } to="/Beverages">Beverages</NavLink>
          <NavLink  className={({ isActive }) =>
              `${isActive ? "bg-green-700 px-[25px] py-[5px] text-white rounded-[25px]" : ""} text-xl`
            } to="/Contact">Contact us</NavLink>
          <NavLink  className={({ isActive }) =>
              `${isActive ? "bg-green-700 px-[25px] py-[5px] text-white rounded-[25px]" : ""} text-xl`
            } to="/Delivery">Delivery</NavLink>
          <NavLink  className={({ isActive }) =>
              `${isActive ? "bg-green-700 px-[25px] py-[5px] text-white rounded-[25px]" : ""} text-xl`
            } to="/Menu"> Menu</NavLink>
        </nav>
      );
}

export default Mobile
