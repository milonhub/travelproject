import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./Auth/Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Register from "./Auth/Register";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Destination from "./pages/Destination";
import About from "./pages/About";
import User from "./Components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/", element: <Home></Home>
      },
      {
        path: "/footer", element: <Footer></Footer>
      },
      {
        path: "/login", element: <Login></Login>
      },
      {
        path: "/destination", element: <Destination></Destination>
      },
      {
        path: "/about", element: <About></About>
      },
      
      {
        path: "/register", element: <Register></Register>
      },

      {
        path: "/user", element: <User></User>
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);