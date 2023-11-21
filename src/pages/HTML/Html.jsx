import React from 'react'
import NavBar from '../../components/Views/navbar/NavBar'
import Sidebar from '../../components/Views/sidebar/Sidebar'
import ContentHome from '../../components/Views/contenido/ContentHome'

function Html() {
  return (
    <div className="relative ">
      <NavBar/>
      <Sidebar/>
      
      <ContentHome/>
    </div>
  )
}

export default Html