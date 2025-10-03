import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <Link to="/" style={{marginRight: '15px'}}>Inicio</Link>
            <Link to="/sobre-mi" style={{ marginRight: '15px'}}>SobreMi</Link>
            <Link to="/proyectos" style={{ marginRight: '15px'}}>Proyectos</Link>
            <Link to="/servicios" style={{ marginRight: '15px'}}>Servicios</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>
    );
}
export default Navbar; 