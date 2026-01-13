import React from 'react';
import { motion } from 'framer-motion';
import dp from './pics/dp.png';

function App() {
  return (
    <div className="bg-black font-sans">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full z-50">
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
        <div className="shrink-0">
          <img src={dp} alt="display pic" className="p-8 md:p-0 rounded-full w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-4 border-white aspect-square" />
        </div>
        <div className="text-white font-montserrat p-10 md:p-8 lg:p-0 pt-20 md:pt-20 lg:pt-0 lg:pl-20 text-2xl md:text-4xl lg:text-6xl md:mt-0">
          Hello, I am N Digvijay
          <br />
          Software Engineer at GoWarm.ai
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
      <section id="experience" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-10 md:p-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white font-montserrat text-3xl md:text-6xl lg:text-7xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative w-full max-w-6xl">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#00A4BD] rounded-full"></div>

          <div className="space-y-12 md:space-y-24">
            {/* Experience 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex-1 md:w-1/2 md:pr-12 mb-8 md:mb-0 pl-8 md:pl-0">
                {/* Card Content */}
                <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-[#00A4BD] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white">Software Developer Engineer</h3>
                  <h4 className="text-xl text-[#00A4BD] mt-1">GoWarm</h4>
                  <p className="text-gray-400 mt-2 text-sm">Aug 2025 - Present · 3 mos</p>
                  <p className="text-gray-500 text-sm">Hyderabad, Telangana, India · Hybrid</p>
                  <p className="text-gray-300 mt-4">Creating Customer Outreach solutions</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Material-UI", "React Query", "Redux", "Microsoft Azure"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00A4BD] rounded-full border-4 border-gray-900 z-10"></div>
              <div className="flex-1 md:w-1/2 md:pl-12 hidden md:block"></div>
            </motion.div>

            {/* Experience 2 (Right aligned on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row-reverse items-center md:justify-between"
            >
              <div className="flex-1 md:w-1/2 md:pl-12 mb-8 md:mb-0 pl-8 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-[#00A4BD] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white">Dev Intern</h3>
                  <h4 className="text-xl text-[#00A4BD] mt-1">GoWarm</h4>
                  <p className="text-gray-400 mt-2 text-sm">Jan 2025 - Jul 2025 · 7 mos</p>
                  <p className="text-gray-500 text-sm">Hyderabad, Telangana, India · Onsite</p>
                  <p className="text-gray-300 mt-4">Building and maintaining microservices.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["CRM", "FastAPI", "HubSpot", "Spring Boot", "MongoDB", "Java", "React.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00A4BD] rounded-full border-4 border-gray-900 z-10"></div>
              <div className="flex-1 md:w-1/2 md:pr-12 hidden md:block"></div>
            </motion.div>

            {/* Experience 3 (Left aligned) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row items-center md:justify-between"
            >
              <div className="flex-1 md:w-1/2 md:pr-12 mb-8 md:mb-0 pl-8 md:pl-0">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-[#00A4BD] transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-white">Intern</h3>
                  <h4 className="text-xl text-[#00A4BD] mt-1">CoDMAV PESU</h4>
                  <p className="text-gray-400 mt-2 text-sm">Jun 2024 - Nov 2024 · 6 mos</p>
                  <p className="text-gray-500 text-sm">Bangalore Urban, Karnataka, India · Hybrid</p>
                  <p className="text-gray-300 mt-4">Building a Research Portal for PES University.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Project Mgmt", "MongoDB", "Tailwind", "Express.js", "Nginx", "React.js"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#00A4BD] rounded-full border-4 border-gray-900 z-10"></div>
              <div className="flex-1 md:w-1/2 md:pl-12 hidden md:block"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 min-h-screen justify-center pt-20 p-10 md:p-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-montserrat text-6xl md:text-7xl lg:text-9xl mb-8 md:mb-20 pt-0 text-center">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

          {/* Graph Based Malware Analysis API */}
          <motion.a
            href="https://github.com/ndigvijay/Capstone_98_2025"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, borderColor: "#00A4BD" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00A4BD] transition-colors">Graph Based Malware Analysis API</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg mb-6 leading-relaxed flex-grow">
              A malware analysis platform that combines graph theory and machine learning to classify
              and analyze malicious executables. The system analyzes pre-trained malware executables and provides
              detailed classification probabilities.
            </p>
            <div className="mt-auto">
              <p className="text-gray-400 font-montserrat text-sm font-medium mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["Flask", "NetworkX", "PyMongo", "Matplotlib", "PyVis", "Cuckoo Sandbox", "React 18", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </motion.a>

          {/* Mflix - Netflix Clone */}
          <motion.a
            href="https://mflix-nu-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, borderColor: "#00A4BD" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00A4BD] transition-colors">Mflix - Netflix Clone</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg mb-6 leading-relaxed flex-grow">
              A streaming platform clone built to understand API integration and web development fundamentals.
              Used the OMDB API to fetch and display movie data dynamically. Implemented custom authentication
              from scratch to handle user login and session management.
            </p>
            <div className="mt-auto">
              <p className="text-gray-400 font-montserrat text-sm font-medium mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["React", "CSS", "React Router Dom", "MongoDB", "Express", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </motion.a>

          {/* Cruise Connect */}
          <motion.a
            href="https://cruise-connect.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, borderColor: "#00A4BD" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00A4BD] transition-colors">Cruise Connect</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg mb-6 leading-relaxed flex-grow">
              A business-to-consumer car rental platform featuring complete CRUD operations for vehicle management.
              Built with dual-layer authentication supporting both admin and user roles. Implemented pagination,
              advanced filtering, and search functionality.
            </p>
            <div className="mt-auto">
              <p className="text-gray-400 font-montserrat text-sm font-medium mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "MongoDB", "Express", "Node.js"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </motion.a>

          {/* Restaurant Ordering System */}
          <motion.a
            href="https://restaurant-ordering-system-9alk.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, borderColor: "#00A4BD" }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
          >
            <h3 className="text-white font-montserrat text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#00A4BD] transition-colors">Restaurant Ordering System</h3>
            <p className="text-gray-300 font-montserrat text-base md:text-lg mb-6 leading-relaxed flex-grow">
              A comprehensive dine-in ordering platform that streamlines the restaurant experience.
              Customers can browse menus, place orders directly from their tables, and receive automated
              bill generation. Containerized with Docker for easy deployment.
            </p>
            <div className="mt-auto">
              <p className="text-gray-400 font-montserrat text-sm font-medium mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["Java", "JSP", "Spring Boot", "CSS", "Docker"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 text-[#00A4BD] rounded-full text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </motion.a>

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
