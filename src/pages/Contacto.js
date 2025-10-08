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
            “Freelancer disponible: desarrollo web moderno y funcional.”
          </p>
        </div>

        {/* Content */}
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Información de contacto</h2>
            <p className="info-desc">
              En busca de mi primera oportunidad en el mundo del código. Motivado, curioso y con ganas de crecer.
            </p>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default Contacto;
