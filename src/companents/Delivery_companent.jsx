 import axios from "axios";
import { useState, useEffect } from "react";

const Delivery = () => {
 const [delivery, setDelivery]= useState([]);
 useEffect (()=>{
    axios.get('http://localhost:3000/delivery')
    .then( res=>{
        setDelivery(res.data[0]);
    })
    .catch(err=>{
        console.error(err);
    })

 }, []);
  return (
    <div className=" flex flex-col justify-center items-center my-[50px]">
        <h1 className="text-center font-bold">{delivery.name}</h1>
        <hr className="w-[50%] h-[2px] bg-green-700 my-[30px]" />
        <p className="text-center w-[60%]" >{delivery.delivery_info}</p>
        <div className="flex  justify-around my-[50px] max-[768px]:block  ">
        {delivery?.detail?.map((item) => (
  
          <div key={item.id} className="w-[25%] my-[50px]  flex flex-col items-center m-auto  ">
           <div className="group max-[768px]: ">
  <div className=" flex  flex-col items-center justify-center hover:group-hover:mb-[180px]  relative 1 m ">
    <div className=" rounded-[50%]  bg-white  p-[50px] p-[25px]  border border-solid border-gray-300 shadow-md flex items-center justify-center">
    <img src={item.img} alt="img" className="w-[70px] h-[70px]   " />
    </div>

    <div className="hidden group-hover:block absolute  w-[400px] top-[50%] left-[-68%] z-[-100]  ">
      <img src="/eat.png" alt="second img" className="w-full"/>
    </div>
    
    <div className=" group-hover:hidden">
               <h3 className="text-center font-bold my-[30px] ">{item.detail_name}</h3>
               <p className="text-center ">{item.info}</p>
             </div>

  </div>
</div>


            
           

          </div>
        ) )}

        </div>
      
    </div>
  )
}

export default Delivery
