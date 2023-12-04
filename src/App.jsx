
import {Outlet}  from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>  <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}

export default App;