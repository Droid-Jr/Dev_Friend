import { useSelector } from "react-redux";
import useFundamentos from '../../../hook/useFundamentos'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useRutas from '../../../hook/useRutas'

function Sidebar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

 


  const [Rutas , changeRutas] = useRutas();

  const [fundamentos , changeFundamentos] = useFundamentos();

 

const navegar = () => {
  navigate("/home")
}




 

  const [open, setOpen] = useState(true);

  const opens = () => {
    setOpen(!open);
  };

 

  return (
    <>
    {open ? (
      <i onClick={opens} className="fa-solid fa-bars open"></i>
    ) : (
      <i onClick={opens} className="fa-sharp fa-solid fa-xmark cerrar"></i>
    )}
    <aside
      className={`sidebar  ${
        open ? "max-[1050px]:left-[-300px]" : "max-[1050px]:left-[0px] "
      } `}
    >
      <section className="sidebar_section ">
        <img
        onClick={navegar}
          className="cursor-pointer rounded-full w-[100px] h-[100px] border-[#555c77]  border-[2px] p-1"
          src="/login/fondo.png"
          alt="logo"
          loading="true"
        />
        <h2 className="font-work text-[#57A3E1] leading-[23px] font-kenia text-[36px]">{user.username} {user.lastname}</h2>
      </section>

      <section className="w-[100%] h-[80%] py-5 bg-[#2B3146] overflow-x-auto  mt-3 ">

        <article onClick={changeRutas}  className="cursor-pointer w-[95%] m-auto h-[78px] bg-[#4E5163] flex items-center justify-center gap-5">
          <img   src="/sidebar/rutas.png" alt="logo" />
          <h2  className="text-[36px] text-[#57A3E1] font-kenia">Rutas</h2>
        </article>
         
         {
          Rutas && <ul className="w-[100%]  py-5 bg-[#2B3146] flex flex-col items-center gap-5">

            <li onClick={changeFundamentos}  className="cursor-pointer w-[90%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img  src="/sidebar/fundamentos.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">Fundamentos</h3>
            </li>
            {
              fundamentos && <div className="w-[100%]   flex flex-col items-center gap-5">

            <Link 
            to={"/html"}
            className="w-[70%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img src="/sidebar/html.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">HTML</h3>
            </Link>

            <Link className="w-[70%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img src="/sidebar/html.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">CSS</h3>
            </Link>

            <Link className="w-[70%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img src="/sidebar/nodejs.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">JavaScript</h3>
            </Link>



              </div>
            }
            <li className="cursor-pointer w-[90%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img src="/sidebar/react.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">React</h3>
            </li>

            <li className="cursor-pointer w-[90%] h-[78px] bg-[#4E5163]  flex items-center justify-center gap-5">
              <img src="/sidebar/nodejs.png" alt="logo" />
              <h3 className="font-kenia text-[#57A3E1] text-[32px]">Node Js</h3>
            </li>

           
           
          </ul>
         }
        
      </section>
    </aside>
  </>
  );
}

export default Sidebar;
