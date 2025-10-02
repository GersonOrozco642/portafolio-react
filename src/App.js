import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/inicio';
import SobreMi from './pages/Sobremi';
import Proyectos from './pages/Proyectos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                {/* Ruta para la página de Inicio. path="/" indica la ruta raíz */}
                <Route path="/" element={<Inicio />} />
                
                <Route path="/sobre-mi" element={<SobreMi />} />
                
                <Route path="/proyectos" element={<Proyectos />} />
                
                <Route path="/servicios" element={<Servicios />} />
                
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </div>
    );
}
export default App;