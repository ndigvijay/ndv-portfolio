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
            <a href="#experience" className="text-white hover:text-gray-400">Experience</a>
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
        <div className="text-white font-montserrat p-10 md:p-8 lg:p-0 pt-20 md:pt-20 lg:pt-0 lg:pl-20 text-2xl md:text-4xl lg:text-6xl md:mt-0">
          Hello, I am N Digvijay
          <br />
          Full Stack Developer at GoWarm.ai
          <br />
          B.tech Graduate from PESU
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

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-10 md:p-20">
        <div className="text-center mb-12">
          <h2 className="text-white font-montserrat text-3xl md:text-6xl lg:text-7xl">Experience</h2>
        </div>
        <div className="text-white font-montserrat w-full max-w-4xl space-y-12">
          {/* GoWarm - Software Developer */}
          <div className="border-l-4 border-gray-600 pl-6">
            <h3 className="text-2xl md:text-3xl font-bold">Software Developer Engineer</h3>
            <p className="text-xl md:text-2xl text-gray-300 mt-2">GoWarm</p>
            <p className="text-lg md:text-xl text-gray-400 mt-1">Aug 2025 - Present · 3 mos</p>
            <p className="text-lg md:text-xl text-gray-400">Hyderabad, Telangana, India · Hybrid</p>
            <p className="text-base md:text-lg text-gray-500 mt-2">Creating Customer Outreach solutions</p>
            <p className="text-base md:text-lg text-gray-400 mt-3 font-medium">Skills: Material-UI, React Query, Redux, Microsoft Azure</p>
          </div>

          {/* GoWarm - Dev Intern */}
          <div className="border-l-4 border-gray-600 pl-6">
            <h3 className="text-2xl md:text-3xl font-bold">Dev Intern</h3>
            <p className="text-xl md:text-2xl text-gray-300 mt-2">GoWarm</p>
            <p className="text-lg md:text-xl text-gray-400 mt-1">Jan 2025 - Jul 2025 · 7 mos</p>
            <p className="text-lg md:text-xl text-gray-400">Hyderabad, Telangana, India · Onsite</p>
            <p className="text-base md:text-lg text-gray-500 mt-2">Building and maintaining microservices.</p>
            <p className="text-base md:text-lg text-gray-400 mt-3 font-medium">Skills: Customer Relationship Management (CRM), FastAPI, HubSpot Sales Hub, Spring Boot, MongoDB, Java, React.js</p>
          </div>

          {/* CoDMAV PESU - Intern */}
          <div className="border-l-4 border-gray-600 pl-6">
            <h3 className="text-2xl md:text-3xl font-bold">Intern</h3>
            <p className="text-xl md:text-2xl text-gray-300 mt-2">CoDMAV PESU</p>
            <p className="text-lg md:text-xl text-gray-400 mt-1">Jun 2024 - Nov 2024 · 6 mos</p>
            <p className="text-lg md:text-xl text-gray-400">Bangalore Urban, Karnataka, India · Hybrid</p>
            <p className="text-base md:text-lg text-gray-500 mt-2">Building a Research Portal for PES University.</p>
            <p className="text-base md:text-lg text-gray-400 mt-3 font-medium">Skills: Software Project Management, MongoDB, Tailwind CSS, Full-Stack Development, Express.js, Nginx, React.js, Reverse Proxy</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 min-h-screen justify-center pt-20 p-10 md:p-20">
        <h2 className="text-white font-montserrat text-6xl md:text-7xl lg:text-9xl mb-8 md:mb-20 pt-0 text-center">Projects</h2>
        <div className='flex flex-col justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto'>

          {/* Graph Based Malware Analysis API */}
          <a href="https://github.com/ndigvijay/Capstone_98_2025" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl">
            <h3 className="text-white font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Graph Based Malware Analysis API</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
              A malware analysis platform that combines graph theory and machine learning to classify
              and analyze malicious executables. The system analyzes pre-trained malware executables and provides
              detailed classification probabilities.
            </p>
            <p className="text-gray-400 font-montserrat text-sm md:text-base lg:text-lg font-medium">
              <span className="text-gray-500">Technologies:</span> Flask, NetworkX, PyMongo, Matplotlib, PyVis, Cuckoo Sandbox, React 18, React Router, Tailwind CSS
            </p>
          </a>

          {/* Mflix - Netflix Clone */}
          <a href="https://mflix-nu-seven.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl">
            <h3 className="text-white font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Mflix - Netflix Clone</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
              A streaming platform clone built to understand API integration and web development fundamentals.
              Used the OMDB API to fetch and display movie data dynamically. Implemented custom authentication
              from scratch to handle user login and session management.
            </p>
            <p className="text-gray-400 font-montserrat text-sm md:text-base lg:text-lg font-medium">
              <span className="text-gray-500">Technologies:</span> React, CSS, React Router Dom, MongoDB, Express, Node.js
            </p>
          </a>

          {/* Cruise Connect */}
          <a href="https://cruise-connect.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl">
            <h3 className="text-white font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Cruise Connect</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
              A business-to-consumer car rental platform featuring complete CRUD operations for vehicle management.
              Built with dual-layer authentication supporting both admin and user roles. Implemented pagination,
              advanced filtering, and search functionality to enhance user experience when browsing available cars.
            </p>
            <p className="text-gray-400 font-montserrat text-sm md:text-base lg:text-lg font-medium">
              <span className="text-gray-500">Technologies:</span> React, Tailwind CSS, MongoDB, Express, Node.js
            </p>
          </a>

          {/* Restaurant Ordering System */}
          <a href="https://restaurant-ordering-system-9alk.onrender.com" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-750 hover:border-gray-600 hover:shadow-2xl">
            <h3 className="text-white font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Restaurant Ordering System</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
              A comprehensive dine-in ordering platform that streamlines the restaurant experience.
              Customers can browse menus, place orders directly from their tables, and receive automated
              bill generation. Built using Spring Boot architecture with proper separation of concerns
              through Models, Repositories, Services, and Controllers. Containerized with Docker for
              easy deployment and scalability.
            </p>
            <p className="text-gray-400 font-montserrat text-sm md:text-base lg:text-lg font-medium">
              <span className="text-gray-500">Technologies:</span> Java, JSP, Spring Boot, CSS, Docker
            </p>
          </a>

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
