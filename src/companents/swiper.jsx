 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 

// import required modules
import { Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <div className="bg-slate-200  ">
    
       <div className="text-center my-[80px]  ">
          <h1 className=" font-bold text-2xl">Beverages</h1>
          <p className="text-slate-500">*All stated prices are without applicable taxes</p>
       </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true} // Enable loop
        autoplay={{
          delay: 3000,  
         
        }}
      >
        <SwiperSlide className=' items-center z-15'>
            <div className="relative flex  justify-center ">
                <img  src="/swp1.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
             
        </SwiperSlide>

        <SwiperSlide >
            <div className="relative flex  justify-center ">
                <img  src="/swp2.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative flex  justify-center ">
                <img  src="/swp3.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className="relative flex  justify-center ">
                <img  src="/swp4.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative flex  justify-center ">
                <img  src="/swp5.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative flex  justify-center ">
                <img  src="/swp6.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>       
        </SwiperSlide>
        <SwiperSlide>
            <div className="relative flex  justify-center ">
                <img  src="/swp4.png"/>
                <div className="flex justify-center items-center text-white  bg-green-600 w-[45px]  h-[45px] rounded-[50%] border-2 border-white absolute bottom-[-20px] left-[20px] ">1$</div>
            </div>
                    
        </SwiperSlide>
   
        
 
      </Swiper>
    </div>
  );
}