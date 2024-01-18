 
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return(
  <footer className="bg-black w-full   text-white      py-[45px]  z-[-1]  flex flex-col gap-[30px] ">

  <div className="flex items-start pt-[50px] justify-beatween  gap-[80px] max-[1020px]:block w-10/12 mx-auto    ">
     <div className = "flex  gap-[20%] w-[40%] max-[1020px]:w-[100%]  max-[1020px]:my-[30px] max-[768px]:block">
         <img src="/footer_logo.png" className = "m-[auto]"alt=""  /> 
         <div className = "flex flex-col items-center"> 
          <h3 className="text-gray-600 font-semibold	">Get in touch</h3>
          <a href="mailto:info@bbq&kebab.com" className="block">info@bbq&kebab.com</a>
          <a href="tel:+6494461709"> +1 (816) 482 1513</a>
        </div> 
     </div>
     <div className =" flex justify-between  gap-[10%] w-[50%]  max-[1020px]:w-[100%] max-[768px]:block max-[768px]:text-center"> 
       <div  className=" ">
          <h3 className="text-gray-600 font-semibold	">Follow us</h3>
          <a href="" className="block" >Instagram</a>
          <a href="">Facebook</a>
        </div> 
        <div className=" "> 
            <h3 className="text-gray-600 font-semibold   	">Address</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
        </div> 
     </div>
  </div>
   <div className="flex justify-between  w-10/12 mx-auto ">
     <div className="flex gap-[10px] items-center">
 
     <FaRegCopyright /> 
     <p >2022 </p>
     <p> Data Privacy</p>
     </div>
     <p>Design by: JEDAI</p>
   </div>

   
  </footer>);
};
export default Footer;
