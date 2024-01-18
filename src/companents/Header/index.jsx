import { useState } from "react";
import Mobile from "../../companents/Mobile";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const[menuOpen,setMenuOpen]=useState(false);
  function handleOpen(){
    setMenuOpen(!menuOpen)
  }
  return (
<main className="flex justify-center  mt-5  ">
  <div className="w-10/12">
    <div onClick={handleOpen}  className=" hidden max-[768px]:flex justify-end cursor-pointer" >
      {menuOpen?<IoMdClose/> :<GiHamburgerMenu  /> }
      
    </div>
<div className=" hidden max-[768px]:block">
  {menuOpen?<Mobile/>:""}
   
</div>
    <header className="flex justify-between items-center max-[768px]:block ">
      <img src={"/logo.png"} alt="Logo" className="w-35 h-17   max-[768px]:m-auto" />
      <a href="tel:+6494461709" className="flex items-center text-center justify-center">+1 (816) 482 1513</a>
    </header>
  </div>
</main>

  );
};

export default Header;
