import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layouts";
import Home from "./components/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Home /> }],
  },
]);

function App() {
  return <></>;
}

export default App;
