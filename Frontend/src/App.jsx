import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router/Router";
import "./App.css";
import "./assets/styles/styles.scss";
import "normalize.css";

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
