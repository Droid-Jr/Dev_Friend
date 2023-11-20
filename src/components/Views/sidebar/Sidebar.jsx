import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import useSidebar from "../../../hook/useSidebar";

function Sidebar() {
  const user = useSelector((state) => state.user);
console.log(user)
  const [Open, changeOpen] = useSidebar();

  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    hidden: { opacity: 0, x: -500, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-[330px] h-[89%] bg-[#2B3146] flex flex-col border-t border-[#393c4b]">
      <article className="w-[100%] h-[240px]   grid place-content-center place-items-center ">
        <img src="/sidebar/profile.png" alt="logoProfile" />
        <h2 className="font-kenia text-[#57A3E1] text-[36px]">
          {user.username} {user.lastname}
        </h2>
      </article>

      <ul className="w-[100%] h-[100%] flex flex-col gap-6">
        <motion.li
          onClick={changeOpen}
          className="w-[100%] h-[78px] bg-[#4E5163] flex items-center justify-center gap-5 cursor-pointer"
        >
          <img src="/sidebar/rutas.png" alt="logoDeRutas" />
          <h3 className="text-[36px] font-kenia text-[#57A3E1]">Rutas</h3>
        </motion.li>

        <AnimatePresence>
          {Open && (
            <>
              <motion.li
                className="w-[100%] h-[78px] bg-[#4E5163] flex items-center justify-center gap-5 cursor-pointer"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                <img src="/sidebar/fundamentos.png" alt="logoDeRutas" />
                <h3 className="text-[36px] font-kenia text-[#57A3E1]">
                  Fundamentos
                </h3>
              </motion.li>

              <motion.li
                className="w-[100%] h-[78px] bg-[#4E5163] flex items-center justify-center gap-5 cursor-pointer"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                <img src="/sidebar/react.png" alt="logoDeRutas" />
                <h3 className="text-[36px] font-kenia text-[#57A3E1]">React</h3>
              </motion.li>

              <motion.li
                className="w-[100%] h-[78px] bg-[#4E5163] flex items-center justify-center gap-5 cursor-pointer"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
              >
                <img src="/sidebar/nodejs.png" alt="logoDeRutas" />
                <h3 className="text-[36px] font-kenia text-[#57A3E1]">
                  Node Js
                </h3>
              </motion.li>
            </>
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}

export default Sidebar;
