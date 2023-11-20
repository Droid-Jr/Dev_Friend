import NavBar from "../components/Views/navbar/NavBar"
import Sidebar from "../components/Views/sidebar/Sidebar"


function Home() {
  return (
    <div className="w-[100%] h-[100vh] ">
      <NavBar/>
      <Sidebar/>
    </div>
  )
}

export default Home