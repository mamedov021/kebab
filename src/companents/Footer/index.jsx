const Footer = () => {
  return(
  <footer className="bg-black w-full   text-white">
   <div className="flex items-start pt-[50px] justify-beatween h-[150px] gap-[8%]">
    <div > <img src="/footer_logo.png" alt="" /></div>
    <div> <h3 className="text-gray-600 font-semibold	">Get in touch</h3>
          <a href="mailto:info@bbq&kebab.com">info@bbq&kebab.com</a>
          <a href="tel:+6494461709"> +1 (816) 482 1513</a>
    </div>
    <div >
      <h3 className="text-gray-600 font-semibold	">Follow us</h3>
      <a href="" className="block" >Instagram</a>
      <a href="">Facebook</a>
    </div> 
    <div> <h3 className="text-gray-600 font-semibold	">Address</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
    </div>
   </div>

   
  </footer>);
};
export default Footer;
