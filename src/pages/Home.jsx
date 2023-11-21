import ContentHome from "../components/Views/contenido/ContentHome"
import NavBar from "../components/Views/navbar/NavBar"
import Sidebar from "../components/Views/sidebar/Sidebar"


function Home() {
  return (
    <div className="relative  ">
      <NavBar/>
      
      <Sidebar/>
      <ContentHome/>
      
    </div>
  )
}

export default Home