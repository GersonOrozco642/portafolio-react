import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import meImage from "../assets/me.jpg"

function Inicio() {
  const [text, setText] = useState('');
  const roles = ['Estudiando ing. Software', 'Construyendo mi portafolio web', 'Aprendiendo React y Node.js'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);

    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText('');
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <div className="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <p className="greeting">Hola, mi nombre es</p>
          <h1 className="name">Gerzon Orozco</h1>
          <h2 className="tagline">
            Estoy <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="description">
            Enfocado en crecer como desarrollador y construir aplicaciones útiles y sencillas.

          </p>

          <div className="hero-buttons">
            <Link to="/proyectos" className="btn-primary">Ver Proyectos</Link>
            <Link to="/contacto" className="btn-secondary">Hablemos →</Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={meImage} alt="Gerzon Orozco" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      {/* Barra lateral redes */}
      <div className="social-sidebar">
        <a href="https://github.com/GersonOrozco642" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="www.linkedin.com/in/gerzon-abdiel-orozco-madero-474a921b7" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="ogerson642@gmail.com">Email</a>
        <div className="social-line"></div>
      </div>

      {/**  Indicador scroll */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  );
}

export default Inicio;
