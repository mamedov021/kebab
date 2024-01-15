  
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-slate-100 text-black  flex justify-around h-[60px] items-center rounded-[35px] ">
     <Link to='/' className='bg-green-700 px-[45px] py-[5px] text-white rounded-[45px] '>About</Link >
     <Link to='/Beverages' >Beverages</Link>
     <Link to='/Contact' >Contact us</Link>
     <Link to='/Delivery' >Delivery</Link>
     <Link to='/Menu' > Menu</Link> 
    </nav>
   
  )
}

export default Nav
