import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './component/Register/Register.jsx';
import Home from './component/Home/Home.jsx'; 
import Productos from './component/producto/Productos.jsx';
import SearchBar from './component/search/SearchBar.jsx'; // Importa SearchBar
// import Login from './component/Login/Login.jsx';

const AppRoutes = ({ user, setUser, modelos }) => {
  return (
    <>
        {/* Coloca el componente SearchBar fuera de cualquier Route */}
        {/* <SearchBar /> */}

        <Routes>
          <Route
            path="/"
            element={<Home user={user} setUser={setUser} modelos={modelos} />}
          />
          <Route path="/registeruser" element={<Register />} />
          <Route path="/Productos" element={<Productos modelos={modelos} />} />
           {/* Agrega la ruta para el componente Login */}
           {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
    </>
  );
};
export default AppRoutes;
