import { useState } from 'react'

export default function useRutas() {
  const [Rutas, setRutas] = useState(false)

  const changeRutas = () => {
    setRutas(!Rutas)
  }

  return [Rutas , changeRutas]
}
