import { useState } from 'react'

export default function useSidebar() {
  const [Open, setOpen] = useState(false)

  const changeOpen = () => {
    setOpen(!Open)
  }

  return [Open , changeOpen]
}
