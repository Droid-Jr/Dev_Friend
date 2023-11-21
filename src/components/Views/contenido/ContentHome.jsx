import React from 'react'

function ContentHome() {
  return (
    <section className='bg-[#4E5163] ml-[300px] h-screen  transition-all duration-300 max-[1050px]:ml-0 relative ' >
       <article className=' h-[100%] grid place-items-center  place-content-center gap-5'>
       <article className=''>
        <img src="/logo.png" alt="logo" />
      </article>

     
      <h2 className='w-[80%] font-kenia  [font-size:_clamp(2em,3vw,3em)] text-[#80C3FA] text-center'>¡Bienvenido a Dev Friend! Tu Compañero     de Aprendizaje en Desarrollo Web. 🚀</h2>
      <h3 className=' w-[90%]  text-center font-kenia  [font-size:_clamp(1.2em,3vw,1.8em)] text-[#40A9FF] '>En Dev Friend, creemos que el viaje de aprendizaje en el mundo del desarrollo web no debería ser solo educativo, ¡debería ser emocionante y divertido! ¿Listo para embarcarte en un emocionante viaje de descubrimiento?</h3>
      <h2 className='w-[80%] font-kenia  [font-size:_clamp(2em,3vw,3.5em)] text-[#80C3FA] text-center'>¡Empieza tu viaje ahora! 🚀</h2>
       </article>
      

    </section>
  )
}

export default ContentHome