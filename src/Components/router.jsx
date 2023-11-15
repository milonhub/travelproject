import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Destination from "../pages/Destination"
import Register from "../pages/Register"
import Navbar from "./Navbar"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path="/" element={ <Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/destination" element={<Destination />}/>
         <Route path="/register" element={<Register />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router