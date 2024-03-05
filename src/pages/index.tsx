import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CardProject from '../components/CardProject/CardProject';
import Contact from '../components/Contact/Contact';

const IndexPage: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2">
          <section className="mb-12 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 w-full">
              <div className="md:w-1/2 md:pr-4">
                <h1 className="text-4xl font-bold text-center mb-4">Omar Hernandez Rey</h1>
                <h2 className="text-lg text-center">Desarrollador de Sistemas de Información</h2>
              </div>
              <div className="md:w-1/2 md:pl-4">
                <img src="/images/foto 3x4-removebg-preview.jpg" alt="Foto de Omar Hernandez Rey" className="rounded-lg shadow-md w-full" />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Biografía</h2>
            <p className="text-lg text-justify">
              Soy un apasionado desarrollador de sistemas de información con experiencia en HTML, CSS, JavaScript, React, Node.js, MySQL y Git. Me encanta resolver problemas y trabajar en equipo. Soy una persona activa, responsable y puntual, siempre en busca de oportunidades para aprender y crecer tanto a nivel personal como profesional. Mi objetivo es contribuir al desarrollo de sistemas eficientes y de alta calidad.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CardProject title="Project 1" description="Description of project 1" />
              <CardProject title="Project 2" description="Description of project 2" />
              <CardProject title="Project 3" description="Description of project 3" />
              <CardProject title="Project 1" description="Description of project 1" />
              <CardProject title="Project 2" description="Description of project 2" />
              <CardProject title="Project 3" description="Description of project 3" />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
            <ul className="list-disc pl-4">
              <li className="text-lg">HTML5 y CSS3</li>
              <li className="text-lg">JavaScript y frameworks como React.js</li>
              <li className="text-lg">Node.js y Express.js</li>
              <li className="text-lg">Bases de datos relacionales como MySQL</li>
              <li className="text-lg">Control de versiones con Git</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <ul className="list-disc pl-4">
              <li className="text-lg">Email: hernandezreyomar@gmail.com</li>
              <li className="text-lg">Teléfono: +57 3219052878</li>
            </ul>
          </section>
        </div>
      </div>

      <Contact />

      <Footer />
    </main>
  );
};

export default IndexPage;
