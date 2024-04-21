import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Registration from "./pages/signUp/Registration.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Orders from "./components/Orders/Orders.jsx";
import PrivateRoute from "./routes/privateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signUp",
        element: <Registration />,
      },
      {
        path: "Orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
