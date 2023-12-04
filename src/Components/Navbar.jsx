import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-around mr-[20%] h-20 bg-white p-3 content-center">
        <NavLink to="/" className= "text-4xl">Trisog</NavLink>
        <NavLink to="/" className="text-3xl">Home</NavLink>
        <NavLink to="/about"className="text-2xl">About</NavLink>
        <NavLink to="/destination"className="text-2xl">Destination</NavLink>
        <NavLink to="/register"className="text-2xl">Register</NavLink>
        <NavLink to="/login"className="text-2xl">Log-in</NavLink>
    </nav>
  )
}

export default Navbar