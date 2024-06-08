import React from 'react';
import dp from './pics/dp.png';

function App() {
  return (
    <div className="bg-black font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <a href="#about" className="text-white text-lg font-bold">N Digvijay</a>
          <div className="space-x-6 flex  sm:flex-row">
            <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-400">Contact Me</a>
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <section id="about" className="bg-black h-screen flex flex-col md:flex-col lg:flex-row items-center justify-center pt-24">
        <div>
          <img src={dp} alt="display pic" className="p-8 md:p-0 rounded-3xl md:rounded-full lg:rounded-full w-25 h-25 md:w-100 md:h-100 lg:h-80 lg:w-80 border-4 border-white" />
        </div>
        <div className="text-white font-montserrat p-12 md:p-0 lg:p-0 pt-20 md:pt-20 lg:pt-0 lg:pl-20 text-2xl md:text-4xl lg:text-6xl md:mt-0">
          Hello, I am N Digvijay
          <br />
          Full Stack Developer
          <br />
          Pursuing B.tech in PES University
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-10 md:p-20">
        <div className="text-center mb-8">
          <h2 className="text-white font-montserrat text-3xl md:text-6xl lg:text-7xl">Skills</h2>
        </div>
        <div className="text-white font-montserrat text-xl md:text-2xl lg:text-3xl w-full">
          <div className="mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-4xl">Languages & Frameworks</h3>
            </div>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=c,java,cpp,py,html,css,js,go,bootstrap,tailwind,react,nodejs,npm,express,nextjs,spring,maven,flask,mongodb,firebase,kafka&theme=dark&perline=7"
                alt="Languages & Frameworks"
              />
            </div>
          </div>
          <div>
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-4xl">Tools & Software</h3>
            </div>
            <div className="flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=vscode,vercel,git,linux,github,docker,kubernetes,jenkins,idea,anaconda,postman&perline=7"
                alt="Tools & Software"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 min-h-screen justify-center pt-20 p-10 md:p-20">
        <h2 className="text-white font-montserrat text-6xl md:text-7xl lg:text-9xl mb-8 md:mb-20 pt-0 text-center">Projects</h2>
        <div className='flex flex-col justify-center items-center pt-20 mt-20 md:mt-32 lg:mt-20'>
          <ul>
            <li className="text-white mb-4 text-2xl md:text-5xl lg:text-7xl transform transition-all duration-300 hover:text-gray-400 hover:scale-105 hover:shadow-lg">
              <a href="https://cruise-connect.vercel.app/" className='text-left' target="_blank" rel="noopener noreferrer">Cruise Connect</a>
            </li>
            <li className="text-white mb-4 text-2xl md:text-5xl lg:text-7xl transform transition-all duration-300 hover:text-gray-400 hover:scale-105 hover:shadow-lg">
              <a href="https://mflix-nu-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Mflix (Netflix Clone)</a>
            </li>
            <li className="text-white mb-4 text-2xl md:text-5xl lg:text-7xl transform transition-all duration-300 hover:text-gray-400 hover:scale-105 hover:shadow-lg">
              <a href="https://restaurant-ordering-system-9alk.onrender.com" target="_blank" rel="noopener noreferrer">Restaurant Ordering System</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="bg-gray-800 min-h-screen flex flex-col items-center justify-center p-10 md:p-20">
        <h2 className="text-white font-montserrat text-3xl md:text-6xl lg:text-7xl mb-8">Contact Me</h2>
        <div className="flex space-x-6 lg:space-x-20">
          <a href="https://www.linkedin.com/in/digvijay-narayan-8b2460259/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </a>
          <a href="https://www.instagram.com/ndv_005/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </a>
          <a href="https://github.com/ndigvijay" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
