import React from 'react';
import '../styles/Sobremi.css';
import meImage from "../assets/me2.jpg";

function Sobremi() {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React',],
    backend: ['Java'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vite'],
  };

  const experience = [
    {
      year: '2025',
      title: 'Desarrollador Frontend',
      company: 'Proyecto Personal',
      description: 'Desarrollo de mi portafolio web utilizando React, CSS, JSX, Vite',
    },
    {
      year: '2024',
      title: 'Certificado en Desarrollo Web',
      company: 'Coderhouse',
      description: 'Curso de 38 horas completado con éxito. Aprendí HTML, CSS, JavaScript y principios de desarrollo web.',
      certificateUrl: 'https://pub.coderhouse.com/legacy-certificates/66fd5293d1c51d20ed89221f?lang=es'
    },
    {
      year: '2023',
      title: 'Curso de Programación Web',
      company: 'EBAC',
      description: 'Introducción al desarrollo web y buenas prácticas. Creación de mis primeros proyectos y bases de JavaScript.',
    },
  ];

  return (
    <div className='sobremi-container'>
      {/* Sección Principal */}
      <section className='hero-section'>
        <div className='hero-content'>
          <span className='hero-tag'>02. Sobre Mí</span>
          <h1 className='hero-title'>
            Desarollador web
            <span className='gradient-text'> Junior </span>
          </h1>
          <p className='hero-description'>
            Estoy aprendiendo y mejorando cada día como desarrollador web. Me interesa crear proyectos útiles,
            bien diseñados y que ofrezcan una buena experiencia al usuario.
          </p>
        </div>
      </section>

      {/* About Me Section: mi historia personal */}
      <section className='about-content'>
        <div className='content-grid'>
          <div className='about-text'>
            <h2 className='section-title'>Mi Historia</h2>
            <div className='text-content'>
              <p>
                ¡Hola! Soy <strong>Gerzon Orozco</strong>, tengo 21 años y estoy estudiando Ingeniería en Software. 
                Voy en mi primer año, aunque mi interés por la programación empezó antes, cuando no tenía muy claro qué quería estudiar. 
                Tomé cursos en EBAC, Coderhouse y aprendí mucho viendo videos en YouTube, hasta que descubrí que esto era lo que realmente me gustaba.
              </p>

              <p>
                Me apasiona el desarrollo web y disfruto crear proyectos que combinen buen diseño y funcionalidad. 
                Sigo aprendiendo todos los días y busco mejorar tanto en frontend como en backend.
              </p>

              <p>
                Mi meta es conseguir mi primer empleo como <strong>desarrollador web junior</strong> para seguir creciendo, ganar experiencia y aportar en proyectos reales.
              </p>
            </div>
          </div>
        </div>

        {/* Stats: Tarjetas */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">2+</h3>
            <p className="stat-label">Proyectos personales</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">1</h3>
            <p className="stat-label">Año metido en la programación</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">∞</h3>
            <p className="stat-label">Motivación por seguir creciendo</p>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className='about-image'>
          <div className='image-wrapper'>
            <div className='image-overlay'></div>
            <img src={meImage} alt="representative image" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='skills-section'>
        <h2 className='section-title'>Habilidades Técnicas</h2>
        <div className='skills-grid'>
          <div className='skills-category'>
            <h3 className='category-title'>
              <span className='icon'>🎨</span>
              Frontend
            </h3>
            <div className='skill-tags'>
              {skills.frontend.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>

          <div className='skill-category'>
            <h3 className='category-title'>
              <span className='icon'>⚙️</span>
              Backend
            </h3>
            <div className='skill-tags'>
              {skills.backend.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>

          <div className='skill-category'>
            <h3 className='category-title'>
              <span className='icon'>🛠️</span>
              Herramientas
            </h3>
            <div className='skill-tags'>
              {skills.tools.map((skill, index) => (
                <span key={index} className='skill-tag'>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='experience-section'>
        <h2 className='section-title'>Experiencia</h2>
        <div className='timeline'>
          {experience.map((exp, index) => (
            <div key={index} className='timeline-item'>
              <div className='timeline-marker'></div>
              <div className='timeline-content'>
                <span className='timeline-year'>{exp.year}</span>
                <h3 className='timeline-title'>{exp.title}</h3>
                <p className='timeline-company'>{exp.company}</p>
                <p className='timeline-description'>{exp.description}</p>
                {exp.certificateUrl && (
                  <a 
                    href={exp.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    Ver certificado 📜
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">¿Buscas un desarrollador web?</h2>
        <p className="cta-description">
          Estoy en busca de mi primer trabajo como desarrollador web junior.  
          Me gusta aprender, trabajar en equipo y mejorar en cada proyecto.  
          Si te interesa alguien con actitud y ganas de crecer, hablemos.
        </p>
        <a href="/contacto" className="cta-button">
          Hablemos
          <span className="arrow">➡️</span>
        </a>
      </section>
    </div>
  );
}

export default Sobremi;