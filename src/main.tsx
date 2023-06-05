import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter } from 'react-router-dom';
import { AdminContextProvider } from "./contexts/AdminContext";
import { StoreContextProvider } from './contexts/StoreContext.tsx';
import { PropertyContextProvider } from './contexts/PropertyContext.tsx';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <StoreContextProvider>
          <PropertyContextProvider>
          <App />
          </PropertyContextProvider>
        </StoreContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
