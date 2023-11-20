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
    <nav className='w-[100%] h-[100px] bg-[#4E5163] flex justify-between sm:justify-around items-center'>
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