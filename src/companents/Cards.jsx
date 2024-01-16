import axios from "axios";
import { useState, useEffect } from "react";

const Cards = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(state);
  return (
    <div className="cards absolute mt-[50px] z-1 grid  grid-cols-3 top-0  gap-[10%] w-[10/12] ">
      {state.map((item) => {
        return (
          <div className="card    bg-white" key={item.id}>
            <div className="relative">
              <img src={item.img} />

              <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">
                9.5$
              </div>
            </div>
            <div className="info mx-[15px] mt-[25px]">
              <>
                <p>{item.calories}</p>
                <h2 className="font-bold">{item.name}</h2>
                <div className="flex gap-[15px]">
                  <div>
                    <h4 className="font-semibold">Main ingredients:</h4>
                    {item?.ingredients_1.map((ingred_1) => {
                      return(
                           <div className="flex" key={ingred_1.id}>
                        <img src={ingred_1.img} alt="" />
                        <p className="pl-[7px]">{ingred_1.ing_name}</p>
                      </div>
                      )

                    })}
                  </div>
                  <div>
                    <h4 className="font-semibold"> Served with:</h4>
                    {item?.ingredients_2.map((ingred_2) => {
                     return(
                      <div className="flex" key={ingred_2.id}>
                        <img src={ingred_2.img} alt="" />
                        <p className="pl-[7px]">{ingred_2.ing_name}</p>
                      </div>  
                     )
                      
                    })}
                  </div>
                </div>
              </>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
