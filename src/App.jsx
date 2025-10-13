import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Servicios from './pages/Servicios.jsx'
import Sobremi from './pages/Sobremi.jsx'
import Contacto from './pages/Contacto.jsx'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sobre-mi" element={<Sobremi />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}
