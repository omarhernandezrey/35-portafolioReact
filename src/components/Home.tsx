// components/Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido a mi portafolio!</h1>
        <p className="text-lg mb-8">Aquí puedes encontrar información sobre mí y mis proyectos.</p>
        {/* Agrega más contenido aquí si es necesario */}
      </div>
    </section>
  );
};

export default Home;
