import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Docs from './components/Docs';
import Help from './components/Help';
import Contact from './components/Contact';
import Layout from './components/Layout';
import './App.css';


const router = createBrowserRouter([
  {
    element: <Layout />,  // Layout wraps around all routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
