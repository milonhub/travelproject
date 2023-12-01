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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/", element: <Login></Login>
      },
      {
        path: "/register", element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);