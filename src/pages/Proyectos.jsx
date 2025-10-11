import React, {useState} from 'react';
import hangman from "../assets/hangman.png";
import '../styles/Proyectos.css';

function Proyectos() {

  const [filter, setFilter] = useState('todos');
  const projects = [
    {
      id: 1,
      title: 'Hangman game',
      description: 'Traditional game',
      img: hangman,
      tags: ['JavaScript', 'CSS', 'HTML'],
      category:'frontend',
      github:'https://github.com/GersonOrozco642',
      demo: 'https://pre-entrega-orozco.vercel.app/',
      highlight: ['Dynamic word guessing' ],
    }
  ];

  const categories = [
    {id: 'todos', label:'Todos'},
    {id: 'frontend', label: 'Frontend'}
  ];

  const filteredProjects = filter === 'todos'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className='projects'>
      <div className='container'>
        <h1 className='section-title'>
          <span className='number'>03</span> Proyectos Personales
        </h1>
        <p className='section-subtitle'>
          Algunos proyectos que he hecho
        </p>

        <div className='filters'>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className='projects-grid'>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}                          
              className='project-card'
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* (7) Imagen + overlay con links */}
              <div className="project-image">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="project-overlay" aria-hidden="true">
                  <div className="overlay-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir GitHub de ${project.title} en nueva pestaña`}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo de ${project.title} en nueva pestaña`}
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* (8) Contenido de la tarjeta */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {project.highlight?.length > 0 && (
                  <div className="project-highlights">
                    {project.highlight.map((h, i) => (
                      <span key={i} className="highlight">✓ {h}</span>
                    ))}
                  </div>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos;   // (9) Cierre/export
