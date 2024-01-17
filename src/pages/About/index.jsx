import PageContainer from "../../companents/Pagecontainer";
import Nav from "../../companents/Nav";
import Map from "../../companents/Map";
import Delivery_companent from "../../companents/Delivery_companent";
import Cards from "../../companents/Cards";
import Bbq from "../../companents/bbq"; 
import MySwiper from "../../companents/swiper";




const About = () => {

  return (
    <>
    <PageContainer >
     
    
      <div className=" container_1">
        <h1 className='text-xl font-extrabold text-neutral-950 tracking-widest w-full flex justify-center my-[50px] md:text-7xl sm:text-4xl'>Taste the Original <span className='text-green-700'>KEBAB</span> </h1>
        <div className='relative flex items-center justify-center'>  
          <img src="/main.png" alt="" className=' h-[90vh] ' />
          <div className='absolute     w-[80%]'>
            <Nav  /> 
          </div>

      </div>
      </div>
      <div className='relative  w-full flex justify-center my-[50px]' >
        <img src="/bbq_bg.png" className=' absolute h-full w-full object-cover'  alt="" />
        <Bbq /> 
      </div>
      
      <div className=" relative    flex  justify-center">
        <img src="/bg.png"  alt="" className="absolute  w-full  z-[-1] "/>
       
        <Cards propName="lorem"/>
       

      </div>
    <MySwiper />
    <Delivery_companent/>
    <Map/> 
    </PageContainer>
      </>
    
  );
};

export default About;
