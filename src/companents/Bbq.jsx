 import  { useState, useEffect } from 'react';
import axios from 'axios';

const Bbq = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
      axios.get('https://db-kebab.vercel.app/about')
        .then(response => {
          setState(response.data[0]);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  return (
  
        <div className=' container_2 flex flex-col justify-center items-center gap-[20px] my-[150px]  top-0'>
                     
                     <h2 className='font-bold text-2xl my-[30px]'>{state.name}</h2>
                     <hr className="w-[50%] h-[3px] bg-green-700"/>
                     <p className=' w-[60%] text-center'> {state.info1} </p>
                     <p className=' w-[60%] text-center'> {state.info2} </p>
                     <p className=' w-[60%] text-center'> {state.info3} </p>
                     <hr className="w-[50%] h-[3px] bg-green-700"/>
                   </div>
      
     
  )
}
 
export default Bbq
