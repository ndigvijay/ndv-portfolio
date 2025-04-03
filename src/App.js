import React, { useState, useEffect } from 'react';
import dp from './pics/dp.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ['about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black font-sans min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900/95 shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#about" className="text-white text-xl font-bold tracking-wider hover:text-indigo-400 transition-colors">
            <span className="text-indigo-500">N</span> Digvijay
          </a>
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className={`text-white capitalize transition-all duration-300 hover:text-indigo-400 ${activeSection === item ? 'border-b-2 border-indigo-500' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 pt-24">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img 
                src={dp} 
                alt="Digvijay" 
                className="relative rounded-full w-64 h-64 object-cover border-4 border-indigo-500 shadow-xl transform transition-all hover:scale-105 duration-300" 
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left mt-8 md:mt-0 md:ml-12">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <div className="text-indigo-400">Hello, I am</div>
              <div className="text-white mt-2">N Digvijay</div>
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4">Full Stack Developer</div>
            <div className="text-md md:text-lg text-gray-400 mt-2">Pursuing B.Tech at PES University</div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-indigo-900/60 text-indigo-300 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-indigo-900/60 text-indigo-300 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-indigo-900/60 text-indigo-300 rounded-full text-sm">MongoDB</span>
              <span className="px-4 py-2 bg-indigo-900/60 text-indigo-300 rounded-full text-sm">Tailwind CSS</span>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-900/30 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">My Skills</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">A comprehensive toolkit developed through academic projects and professional experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-blue-400 transition-colors">
                <span className="text-blue-400 mr-3 bg-blue-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-4 h-4" alt="React" />
                  React
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-4 h-4 invert" alt="Next.js" />
                  Next.js
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className="w-4 h-4" alt="Redux" />
                  Redux
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML5" />
                  HTML5
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS3" />
                  CSS3
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JavaScript" />
                  JavaScript
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="w-4 h-4" alt="Webpack" />
                  Webpack
                </span>
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-900/50 to-green-800/30 backdrop-blur-sm border border-green-700/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-green-400 transition-colors">
                <span className="text-green-400 mr-3 bg-green-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-4 h-4" alt="Node.js" />
                  Node.js
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-4 h-4 invert" alt="Express" />
                  Express
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-4 h-4" alt="Spring" />
                  Spring
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-4 h-4" alt="Spring Boot" />
                  Spring Boot
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-4 h-4 invert" alt="Flask" />
                  Flask
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" className="w-4 h-4" alt="Nginx" />
                  Nginx
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  REST APIs
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 backdrop-blur-sm border border-yellow-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-yellow-400 transition-colors">
                <span className="text-yellow-400 mr-3 bg-yellow-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JavaScript" />
                  JavaScript
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-4 h-4" alt="Java" />
                  Java
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-4 h-4" alt="Python" />
                  Python
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" className="w-4 h-4" alt="Go" />
                  Go
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-4 h-4" alt="C" />
                  C
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" className="w-4 h-4" alt="Bash" />
                  Bash
                </span>
              </div>
            </div>

            {/* Database */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-red-900/50 to-red-800/30 backdrop-blur-sm border border-red-700/30 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-red-400 transition-colors">
                <span className="text-red-400 mr-3 bg-red-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </span>
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-4 h-4" alt="MySQL" />
                  MySQL
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-4 h-4" alt="PostgreSQL" />
                  PostgreSQL
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-4 h-4" alt="MongoDB" />
                  MongoDB
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className="w-4 h-4" alt="Firebase" />
                  Firebase
                </span>
              </div>
            </div>

            {/* DevOps */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/30 backdrop-blur-sm border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-purple-400 transition-colors">
                <span className="text-purple-400 mr-3 bg-purple-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </span>
                DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-4 h-4" alt="Docker" />
                  Docker
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" className="w-4 h-4" alt="AWS" />
                  AWS
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="w-4 h-4" alt="Jenkins" />
                  Jenkins
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-4 h-4" alt="Git" />
                  Git
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="w-4 h-4" alt="Linux" />
                  Linux
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-4 h-4" alt="Postman" />
                  Postman
                </span>
              </div>
            </div>

            {/* CSS & UI Frameworks */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 backdrop-blur-sm border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-cyan-400 transition-colors">
                <span className="text-cyan-400 mr-3 bg-cyan-900/60 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </span>
                CSS & UI Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-4 h-4" alt="Tailwind CSS" />
                  Tailwind CSS
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-4 h-4" alt="Bootstrap" />
                  Bootstrap
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS3" />
                  CSS3
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="w-4 h-4" alt="SASS" />
                  SASS
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" className="w-4 h-4" alt="Material UI" />
                  Material UI
                </span>
              </div>
            </div>
          </div>

          {/* Data Science & ML */}
          <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-violet-900/50 to-indigo-800/30 backdrop-blur-sm border border-violet-700/30 hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center group-hover:text-violet-400 transition-colors">
              <span className="text-violet-400 mr-3 bg-violet-900/60 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Data Science & Machine Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="w-4 h-4" alt="scikit-learn" />
                scikit-learn
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-4 h-4" alt="Pandas" />
                Pandas
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="w-4 h-4" alt="NumPy" />
                NumPy
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-4 h-4" alt="TensorFlow" />
                TensorFlow
              </span>
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm flex items-center gap-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                Data Visualization
              </span>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-indigo-700/30 max-w-xl text-center">
              <p className="text-gray-300">Currently working on expanding my skills in</p>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full inline-flex items-center gap-2 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-5 h-5" alt="Spring Boot" />
                  Spring Boot
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full inline-flex items-center gap-2 shadow-sm">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" className="w-5 h-5" alt="Spring Security" />
                  Spring Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 min-h-screen flex flex-col justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Featured Projects</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  Cruise Connect
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Cruise Connect</h3>
                  <p className="text-gray-400 text-sm mb-4">A modern transportation platform connecting travelers to cruise options.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">MongoDB</span>
                  </div>
                  <a 
                    href="https://cruise-connect.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                <div className="h-48 bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center text-white text-2xl font-bold">
                  Mflix
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Mflix (Netflix Clone)</h3>
                  <p className="text-gray-400 text-sm mb-4">A sophisticated streaming platform clone with modern UI and features.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">Firebase</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">API Integration</span>
                  </div>
                  <a 
                    href="https://mflix-nu-seven.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  Restaurant OS
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">Restaurant Ordering System</h3>
                  <p className="text-gray-400 text-sm mb-4">An efficient ordering system for restaurants with real-time updates.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">Express</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">MongoDB</span>
                    <span className="px-2 py-1 bg-indigo-900/60 text-indigo-300 rounded text-xs">JavaScript</span>
                  </div>
                  <a 
                    href="https://restaurant-ordering-system-9alk.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/ndigvijay" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-indigo-600/20 text-indigo-400 rounded-lg hover:bg-indigo-600/30 transition-colors inline-flex items-center"
            >
              View More Projects on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 min-h-screen flex flex-col justify-center px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white inline-block relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Get In Touch</span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Feel free to reach out for collaborations, opportunities, or just a friendly chat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900/60 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:ndigvijay@example.com" className="text-white hover:text-indigo-400 transition-colors">ndigvijay@example.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-900/60 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Bengaluru, India</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mt-10 mb-6">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/digvijay-narayan-8b2460259/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-900/60 p-3 rounded-full text-white hover:bg-indigo-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/ndigvijay" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-900/60 p-3 rounded-full text-white hover:bg-indigo-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/ndv_005/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-indigo-900/60 p-3 rounded-full text-white hover:bg-indigo-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-1 text-sm">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-1 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-1 text-sm">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white rounded-lg py-3 px-4 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} N Digvijay. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Made with <span className="text-red-500">❤</span> using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
