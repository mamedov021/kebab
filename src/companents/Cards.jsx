import axios from "axios";
import { useState, useEffect } from "react";

const Cards = ({ propName }) => {
  console.log(propName);
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

  // console.log(state);
  return (
    <div className="cards my-[70px] z-1 grid  top-0  gap-[30px] w-10/12  grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-4  " key="0">
      {state.map((item) => {
        return (
          <div className="card bg-white  drop-shadow" key={item.id}>
            <div className="relative">
              <img src={item.img} className="w-full"/>

              <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px]  ">
                9.5$
              </div>
            </div>
            <div className="info mx-[15px] mt-[25px] bg-white">
              <>
                <p>{item.calories}</p>
                <h2 className="font-bold">{item.name}</h2>
                <div className="flex gap-[15px]">
                  <div>
                    <h4 className="font-semibold">Main ingredients:</h4>
                    {item?.ingredients_1.map((ingred_1) => {
                      return (
                        <div className="flex" key={ingred_1.id}>
                          <img src={ingred_1.img} alt="" />
                          <p className="pl-[7px]">{ingred_1.ing_name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <h4 className="font-semibold"> Served with:</h4>
                    {item?.ingredients_2.map((ingred_2) => {
                      return (
                        <div className="flex" key={ingred_2.id}>
                          <img src={ingred_2.img} alt="" />
                          <p className="pl-[7px]">{ingred_2.ing_name}</p>
                        </div>
                      );
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
