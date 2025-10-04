import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">{'<GO />'}</Link>

        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number">01.</span> Inicio
          </NavLink>
          <NavLink to="/sobre-mi" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number">02.</span> Sobre Mí
          </NavLink>
          <NavLink to="/proyectos" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number">03.</span> Proyectos
          </NavLink>
          <NavLink to="/servicios" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number">04.</span> Servicios
          </NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            <span className="number">05.</span> Contacto
          </NavLink>

          <a href="/CV_Gerson_Orozco.pdf" download className="btn-resume">
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
