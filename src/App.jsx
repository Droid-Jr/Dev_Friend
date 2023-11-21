import { HashRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import ProtecLogin from './Protec-Rutas/ProtecLogin'
import Home from './pages/Home'
import ProtecteHtml from './Protec-Rutas/ProtecteHtml'
import Html from "./pages/HTML/Html"
function App() {
  

  return (
    
     <HashRouter>
      <Routes>
        <Route element={<Login/>} path="/" />

        <Route element={<ProtecLogin/>}>
          
          <Route element={<Home/>} path="/home"/>

          <Route element={<ProtecteHtml/>}>
            <Route element={<Html/>} path="/html"/>
          </Route>

        </Route>

      </Routes>
     </HashRouter>
  
  )
}

export default App
