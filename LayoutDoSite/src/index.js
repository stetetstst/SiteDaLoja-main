import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from './Cadastro';
import Carrinho from './Carrinho';
import Produto1 from './Produto1';
import Produto2 from './Produto2';
import Produto3 from './Produto3';
import Produto4 from './Produto4';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
  {
    path: "/Carrinho",
    element: <Carrinho />
  },
  {
    path: "/Produto1",
    element: <Produto1 />
  },
  {
    path: "/Produto2",
    element: <Produto2 />
  },
  {
    path: "/Produto3",
    element: <Produto3 />
  },
  {
    path: "/Produto4",
    element: <Produto4 />
  },
])



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

