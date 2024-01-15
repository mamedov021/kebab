import PageContainer from "../../companents/Pagecontainer";
import Nav from "../../companents/Nav";
import Map from "../../companents/Map";
import Delivery_companent from "../../companents/Delivery_companent";
import Cards from "../../companents/Cards";
 
 
import MySwiper from "../../companents/swiper";
import  { useState, useEffect } from 'react';
import axios from 'axios';



const About = () => {
   const [state, setState] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:3000/about')
       .then(response => {
         setState(response.data[0]);
       })
       .catch(error => {
         console.error(error);
       });
   }, []);
  return (
    <>
    <PageContainer >
     
    
      <div className=" container_1">
        <h1 className='text-7xl font-extrabold text-neutral-950 tracking-widest w-full flex justify-center my-[50px]'>Taste the Original <span className='text-green-700'>KEBAB</span> </h1>
        <div className='relative flex items-center justify-center'>  
          <img src="/main.png" alt="" className=' h-[90vh] ' />
          <div className='absolute     w-[80%]'>
            <Nav  /> 
          </div>

      </div>
      </div>
      <div className=' container_2 flex flex-col justify-center items-center gap-[20px] my-[150px]'>
                     
        <h2>{state.name}</h2>
        <hr className="w-[50%] h-[3px] bg-green-700"/>
        <p className=' w-[60%] text-center'> {state.info1} </p>
        <p className=' w-[60%] text-center'> {state.info2} </p>
        <p className=' w-[60%] text-center'> {state.info3} </p>
        <hr className="w-[50%] h-[3px] bg-green-700"/>
      </div>
      
      <div className=" relative mb-[800px]">
        <div className=" bg-green-600 h-[360px]   "></div>
        <Cards className="absolute"/>
       

      </div>
    <MySwiper />
    <Delivery_companent/>
    <Map/>
 
    </PageContainer>
      </>
    
  );
};

export default About;
