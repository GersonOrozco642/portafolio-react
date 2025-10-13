import React, { useState } from 'react';
import '../styles/Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ogerson642@gmail.com',
      link: 'mailto:ogerson642@gmail.com',
    },
    {
      icon: '📱',
      label: 'Teléfono',
      value: '+52 (669) 254-7414',
      link: 'tel:+526692547414',
    },
    {
      icon: '💼',
      label: 'GitHub',
      value: 'GersonOrozco642',
      link: 'https://github.com/GersonOrozco642',
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'Gerzon Orozco',
      link: 'https://www.linkedin.com/in/gerzon-abdiel-orozco-madero-474a921b7',
    },
  ];

  return (
    <div className="contacto">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h1 className="section-title">
            <span className="number">05.</span> Contacto
          </h1>
          <p className="section-subtitle">
            "Junior disponible: desarrollo web moderno."
          </p>
        </div>

        <div className="contact-content">
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="info-title">Información de Contacto</h2>
            <p className="info-desc">
              En busca de mi primera oportunidad en el mundo del código. Motivado, y con ganas de crecer.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-text">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator"></div>
              <span>Disponible para trabajo como junior</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-title">Envíame un Mensaje</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : status === 'success' ? '¡Enviado! ✓' : 'Enviar Mensaje'}
              </button>

              {status === 'success' && (
                <div className="success-message">
                  ¡Porfavor contactame! Te responderé pronto.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacto;