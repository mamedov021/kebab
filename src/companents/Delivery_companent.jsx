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
        <h1 className="text-center">{delivery.name}</h1>
        <hr className="w-[50%] h-[2px] bg-green-700 my-[30px]" />
        <p className="text-center w-[60%]" >{delivery.delivery_info}</p>
        <div className="flex  justify-around my-[50px]">
        {delivery?.detail?.map((item) => (
  
          <div key={item.id} className="w-[25%] my-[50px]  flex flex-col items-center ">
            <div className=" rounded-[50%]  p-[50px]  border border-solid border-gray-300 shadow-md ">

              <img src={item.img} alt="img" className= " w-[80px] h-[80px]  "  />

            </div>
            <h3 className="text-center font-bold my-[30px] ">{item.detail_name}</h3>
            <p className="text-center ">{item.info}</p>

          </div>
        ) )}

        </div>
      
    </div>
  )
}

export default Delivery
