// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
        <p className="text-lg mb-8">Aquí puedes escribir algo sobre ti, tus habilidades y tu experiencia.</p>
        {/* Agrega más contenido aquí si es necesario */}
      </div>
    </section>
  );
};

export default About;
