import { HashRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import ProtecLogin from './Protec-Rutas/ProtecLogin'
import Home from './pages/Home'
function App() {
  

  return (
    <div className="w-[100%] flex flex-col items-center bg-[#000000]">
     <HashRouter>
      <Routes>
        <Route element={<Login/>} path="/" />

        <Route element={<ProtecLogin/>}>
          <Route element={<Home/>} path="/home"/>
        </Route>

      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
