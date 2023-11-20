import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import axios from "axios";
import { setUser } from "../store/slices/user.slice";
import apiLogin from "../api/apiLogin";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = apiLogin()
 
  const { register, handleSubmit } = useForm();

  const login = (data) => {
    axios.post(`${url}`, data)
      .then(res => { 
        dispatch(setUser(res.data))
        localStorage.setItem("token",res.data.token)
        toast.success("terminos aceptados");
        setTimeout(() => {
          navigate("/home");
        }, 1200);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

  
  return (
    <section className=" w-[100%] md:w-[87.5em] h-screen   grid place-items-center lg:flex">
      <article className="w-[50%] h-[100%] hidden lg:grid lg:place-content-center ">
        <img
          src="/login/fondo.png"
          alt="logo"
          className="drop-shadow-[0px_0px_10px_#FF00DA]"
        />
      </article>

      <article className="w-[100%] h-[100%] md:w-[50%] grid place-content-center ">
        <form
       onSubmit={handleSubmit(login)}
          className="py-5 md:w-[25em] md:h-[37.5em] bg-[#2B3146] rounded-[10px] 
        shadow-[0px_0px_150px_1px_#FF00DA] flex items-center justify-center"
        >
          <article className="w-[20em] flex flex-col justify-between h-[30em] ">
            <header className="flex flex-col  items-center">
              <img
                className="w-[8em] drop-shadow-[0px_0px_10px_#FF00DA]"
                src="/login/fondo.png"
                alt="logo"
              />
              <h2 className="text-[3em] font-kenia text-[#58A0DE]">Login</h2>
            </header>
            <section className="grid place-content-center gap-10">
              <input
                type="text"
                name="email"
                id="email"
                {...register("email")}
                className="outline-none border-b border-[#58A0DE] bg-transparent text-white font-kenia text-center"
                placeholder="example@gmail.com"
              />
              <input
                type="password"
                name="password"
                id="passwor"
                {...register("password")}
                className="outline-none border-b border-[#58A0DE] bg-transparent text-white text-center"
                placeholder="*********"
              />
            </section>
            <footer className="grid place-content-center">
              <button className="bg-[rgba(88,160,222,0.20)] duration-300 ease-in-out hover:bg-[rgba(88,160,222,0.65)] px-[2em] py-[.1em] rounded-[0.625em] text-[#E56AA3] text-[32px] font-kenia">
                Ingresar
              </button>
            </footer>
          </article>
        </form>
        <Toaster position="top-center" richColors />
      </article>
     
    </section>
  );
}

export default Login;
