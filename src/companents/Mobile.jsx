import { NavLink } from "react-router-dom";



const Mobile = ({menuOpen}) => {
    return (
        <nav className={`${
          menuOpen ? "right-0" : "-right-full"
        }  bg-white fixed flex flex-col justify-around items-center  top-0 h-full shadow-2xl w-full transition-all duration-500 z-20 px-4  bg-gray-700 text-black gap-[25px] py-[25px]  `}>
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
