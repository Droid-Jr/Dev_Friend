import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const exit = () => {
        token && localStorage.removeItem("token")
        setTimeout(() => {
            navigate('/')
        }, 1200);
    }
  return (
    <nav className='bg-[#2B3146] fixed z-10 flex justify-around  items-center w-[100%] h-[100px] border-b-[3px] border-[#636b85]'>
      <Link to={"/home"}>
        <img src="/logo.png" alt="logo" className='w-[190px] h-[80px] lg:w-[200px]  drop-shadow-[0px_0px_1px_#FF00DA]' />
      </Link>

        <img
        onClick={exit}
        src="/navbar/image.png" alt="logoDeSalir" className='w-[90px] h-[80px] cursor-pointer' />
    </nav>
  )
}

export default NavBar