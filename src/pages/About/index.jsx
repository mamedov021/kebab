import PageContainer from "../../companents/Pagecontainer";
import Nav from "../../companents/Nav";
 
import MySwiper from "../../companents/swiper";


const About = () => {
  return ( <>
    <PageContainer >
     
    
      <div className=" container_1">
        <h1 className='text-6xl font-extrabold text-neutral-950 tracking-widest w-full flex justify-center my-[50px]'>Taste the Original <span className='text-green-700'>KEBAB</span> </h1>
        <div className='relative flex items-center justify-center'>  
          <img src="/main.png" alt="" className=' h-[90vh] ' />
          <div className='absolute     w-[80%]'>
            <Nav  /> 
          </div>

      </div>
      </div>
      <div className=' container_2 flex flex-col justify-center items-center gap-[20px] my-[150px]'>
        <h2>BBQ&Kebab</h2>
        <hr className="w-[50%] h-[3px] bg-green-700"/>
        <p className=' w-[60%] text-center'>Barbecue in Kansas City is more than a menu item or a method of preparation. It’s an institution, rich with history and culinary tradition that shapes the city’s dining landscape every day and has since the early 1900s.   </p>
        <p className=' w-[60%] text-center'>To follow the heritage, we embrace the tradition keeping the concept of ultimate comfort food and remain a part of something timeless with our “Kebab” Middle Eastern style of BBQ.</p>
        <p className=' w-[60%] text-center'>We use only low fat quality 100% American beef and lamb. Our smiles and laughter demonstrate confidence in our product and service. Our portions are rich and our service system is one of the easiest, quick serve kebab outlets in the country</p>
        <hr className="w-[50%] h-[3px] bg-green-700"/>
      </div>
      
      <div className=" relative mb-[800px]">
        <div className=" bg-green-600 h-[360px]   "></div>
        <div className="cards absolute mt-[50px] z-1 flex justify-around top-0 ">
        <div className="card w-[25%] bg-white">
          <div className="relative" >
            <img src="/card1.png"/>
            <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">9.5$</div>
          </div>
          <div className="info mx-[15px] mt-[25px]">
            <>
             <p>4oz Beef 660 Calories</p>
             <h2 className="font-bold">KING KEBAB</h2>
             <div className="flex gap-[15px]">
              <div>
              <h4 className="font-semibold">Main ingredients:</h4>
              <div className = "flex"> <img src="/meat_1.svg" alt="" />
                 <p className = "pl-[7px]">Beef</p>
              </div>
              <div className = "flex"> <img src="/meat_2.svg" alt="" />
                 <p className = "pl-[7px]">Onion</p>
              </div>
              <div className = "flex"> <img src="/meat_3.svg" alt="" />
                 <p className = "pl-[7px]">Black Pepper</p>
              </div>
              <div className = "flex"> <img src="/meat_4.svg" alt="" />
                 <p className = "pl-[7px]">Salt</p>
              </div>
             
             
             </div>
             <div>
             <h4 className="font-semibold"> Served with:</h4>
             <div className = "flex"> <img src="/meat_5.svg" alt="" />
                 <p className = "pl-[7px]">Lavash/flathbred</p>
              </div>
              <div className = "flex"> <img src="/meat_6.svg" alt="" />
                 <p className = "pl-[7px]">Fries</p>
              </div>
              <div className = "flex"> <img src="/meat_7.svg" alt="" />
                 <p className = "pl-[7px]">Tomato</p>
              </div>
              <div className = "flex"> <img src="/meat_8.svg" alt="" />
                 <p className = "pl-[7px]">Cucumber</p>
              </div>
              <div className = "flex"> <img src="/meat_9.svg" alt="" />
                 <p className = "pl-[7px]">Lettuce</p>
              </div>
              <div className = "flex"> <img src="/meat_10.svg" alt="" />
                 <p className = "pl-[7px]">Parsley</p>
              </div>
              <div className = "flex"> <img src="/meat_11.svg" alt="" />
                 <p className = "pl-[7px]">Sumacs</p>
              </div>


             </div>
             </div>
             
            </>
           
          </div>
        </div>
        <div className="card w-[25%] bg-white">
          <div className="relative" >
            <img src="/card1.png"/>
            <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">11.5$</div>
          </div>
          <div className="info mx-[15px] mt-[25px]">
            <>
             <p>4oz Beef 620 Calories</p>
             <h2 className="font-bold">QUEEN KEBAB WRAP</h2>
             <div className="flex gap-[15px]">
              <div>
              <h4 className="font-semibold">Main ingredients:</h4>
              <div className = "flex"> <img src="/meat_1.svg" alt="" />
                 <p className = "pl-[7px]">Beef</p>
              </div>
              <div className = "flex"> <img src="/meat_2.svg" alt="" />
                 <p className = "pl-[7px]">Onion</p>
              </div>
              <div className = "flex"> <img src="/meat_3.svg" alt="" />
                 <p className = "pl-[7px]">Black Pepper</p>
              </div>
              <div className = "flex"> <img src="/meat_4.svg" alt="" />
                 <p className = "pl-[7px]">Salt</p>
              </div>
             
             
             </div>
             <div>
             <h4 className="font-semibold"> Served with:</h4>
             <div className = "flex"> <img src="/meat_5.svg" alt="" />
                 <p className = "pl-[7px]">Lavash/flathbred</p>
              </div>
              <div className = "flex"> <img src="/meat_6.svg" alt="" />
                 <p className = "pl-[7px]">Fries</p>
              </div>
              <div className = "flex"> <img src="/meat_7.svg" alt="" />
                 <p className = "pl-[7px]">Tomato</p>
              </div>
              <div className = "flex"> <img src="/meat_8.svg" alt="" />
                 <p className = "pl-[7px]">Cucumber</p>
              </div>
              <div className = "flex"> <img src="/meat_9.svg" alt="" />
                 <p className = "pl-[7px]">Lettuce</p>
              </div>
              <div className = "flex"> <img src="/meat_10.svg" alt="" />
                 <p className = "pl-[7px]">Parsley</p>
              </div>
              <div className = "flex"> <img src="/meat_11.svg" alt="" />
                 <p className = "pl-[7px]">Sumacs</p>
              </div>


             </div>
             </div>
             
            </>
           
          </div>
        </div>
        <div className="card w-[25%] bg-white">
          <div className="relative" >
            <img src="/card1.png"/>
            <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">8.5$</div>
          </div>
          <div className="info mx-[15px] mt-[25px]">
            <>
             <p>4oz Beef 530 Calories</p>
             <h2 className="font-bold">CHICK KEBAB WRAP</h2>
             <div className="flex gap-[15px]">
              <div>
              <h4 className="font-semibold">Main ingredients:</h4>
              <div className = "flex"> <img src="/meat_1.svg" alt="" />
                 <p className = "pl-[7px]">Beef</p>
              </div>
              <div className = "flex"> <img src="/meat_2.svg" alt="" />
                 <p className = "pl-[7px]">Onion</p>
              </div>
              <div className = "flex"> <img src="/meat_3.svg" alt="" />
                 <p className = "pl-[7px]">Black Pepper</p>
              </div>
              <div className = "flex"> <img src="/meat_4.svg" alt="" />
                 <p className = "pl-[7px]">Salt</p>
              </div>
             
             
             </div>
             <div>
             <h4 className="font-semibold"> Served with:</h4>
             <div className = "flex"> <img src="/meat_5.svg" alt="" />
                 <p className = "pl-[7px]">Lavash/flathbred</p>
              </div>
              <div className = "flex"> <img src="/meat_6.svg" alt="" />
                 <p className = "pl-[7px]">Fries</p>
              </div>
              <div className = "flex"> <img src="/meat_7.svg" alt="" />
                 <p className = "pl-[7px]">Tomato</p>
              </div>
              <div className = "flex"> <img src="/meat_8.svg" alt="" />
                 <p className = "pl-[7px]">Cucumber</p>
              </div>
              <div className = "flex"> <img src="/meat_9.svg" alt="" />
                 <p className = "pl-[7px]">Lettuce</p>
              </div>
              <div className = "flex"> <img src="/meat_10.svg" alt="" />
                 <p className = "pl-[7px]">Parsley</p>
              </div>
              <div className = "flex"> <img src="/meat_11.svg" alt="" />
                 <p className = "pl-[7px]">Sumacs</p>
              </div>


             </div>
             </div>
             
            </>
           
          </div>
        </div>
        
        
    
        </div>
        {/* <div className = "flex">
        <div className="card w-[25%] bg-white">
          <div className="relative" >
            <img src="/card1.png"/>
            <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">8.5$</div>
          </div>
          <div className="info mx-[15px] mt-[25px]">
            <>
             <p>4oz Beef 530 Calories</p>
             <h2 className="font-bold">CHICK KEBAB WRAP</h2>
             <div className="flex gap-[15px]">
              <div>
              <h4 className="font-semibold">Main ingredients:</h4>
              <div className = "flex"> <img src="/meat_1.svg" alt="" />
                 <p className = "pl-[7px]">Beef</p>
              </div>
              <div className = "flex"> <img src="/meat_2.svg" alt="" />
                 <p className = "pl-[7px]">Onion</p>
              </div>
              <div className = "flex"> <img src="/meat_3.svg" alt="" />
                 <p className = "pl-[7px]">Black Pepper</p>
              </div>
              <div className = "flex"> <img src="/meat_4.svg" alt="" />
                 <p className = "pl-[7px]">Salt</p>
              </div>
             
             
             </div>
             <div>
             <h4 className="font-semibold"> Served with:</h4>
             <div className = "flex"> <img src="/meat_5.svg" alt="" />
                 <p className = "pl-[7px]">Lavash/flathbred</p>
              </div>
              <div className = "flex"> <img src="/meat_6.svg" alt="" />
                 <p className = "pl-[7px]">Fries</p>
              </div>
              <div className = "flex"> <img src="/meat_7.svg" alt="" />
                 <p className = "pl-[7px]">Tomato</p>
              </div>
              <div className = "flex"> <img src="/meat_8.svg" alt="" />
                 <p className = "pl-[7px]">Cucumber</p>
              </div>
              <div className = "flex"> <img src="/meat_9.svg" alt="" />
                 <p className = "pl-[7px]">Lettuce</p>
              </div>
              <div className = "flex"> <img src="/meat_10.svg" alt="" />
                 <p className = "pl-[7px]">Parsley</p>
              </div>
              <div className = "flex"> <img src="/meat_11.svg" alt="" />
                 <p className = "pl-[7px]">Sumacs</p>
              </div>


             </div>
             </div>
             
            </>
           
          </div>
        </div >
        <div className="card w-[25%] bg-white">
          <div className="relative" >
            <img src="/card1.png"/>
            <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-22.5px] right-[20px] ">8.5$</div>
          </div>
          <div className="info mx-[15px] mt-[25px]">
            <>
             <p>4oz Beef 530 Calories</p>
             <h2 className="font-bold">CHICK KEBAB WRAP</h2>
             <div className="flex gap-[15px]">
              <div>
              <h4 className="font-semibold">Main ingredients:</h4>
              <div className = "flex"> <img src="/meat_1.svg" alt="" />
                 <p className = "pl-[7px]">Beef</p>
              </div>
              <div className = "flex"> <img src="/meat_2.svg" alt="" />
                 <p className = "pl-[7px]">Onion</p>
              </div>
              <div className = "flex"> <img src="/meat_3.svg" alt="" />
                 <p className = "pl-[7px]">Black Pepper</p>
              </div>
              <div className = "flex"> <img src="/meat_4.svg" alt="" />
                 <p className = "pl-[7px]">Salt</p>
              </div>
             
             
             </div>
             <div>
             <h4 className="font-semibold"> Served with:</h4>
             <div className = "flex"> <img src="/meat_5.svg" alt="" />
                 <p className = "pl-[7px]">Lavash/flathbred</p>
              </div>
              <div className = "flex"> <img src="/meat_6.svg" alt="" />
                 <p className = "pl-[7px]">Fries</p>
              </div>
              <div className = "flex"> <img src="/meat_7.svg" alt="" />
                 <p className = "pl-[7px]">Tomato</p>
              </div>
              <div className = "flex"> <img src="/meat_8.svg" alt="" />
                 <p className = "pl-[7px]">Cucumber</p>
              </div>
              <div className = "flex"> <img src="/meat_9.svg" alt="" />
                 <p className = "pl-[7px]">Lettuce</p>
              </div>
              <div className = "flex"> <img src="/meat_10.svg" alt="" />
                 <p className = "pl-[7px]">Parsley</p>
              </div>
              <div className = "flex"> <img src="/meat_11.svg" alt="" />
                 <p className = "pl-[7px]">Sumacs</p>
              </div>


             </div>
             </div>
             
            </>
           
          </div>
        </div>
        </div> */}

      </div>
    <MySwiper/>
 
    </PageContainer>
      </>
    
  );
};

export default About;
