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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-indigo-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Languages & Frameworks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=react" alt="React" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=py" alt="Python" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=java" alt="Java" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">MongoDB</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="text-indigo-400 hover:underline text-sm">
                  And many more...
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-indigo-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </span>
                Tools & Software
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">VS Code</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=git" alt="Git" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">GitHub</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Docker</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Linux</span>
                </div>
                <div className="flex flex-col items-center">
                  <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="w-14 h-14" />
                  <span className="text-gray-300 mt-2">Postman</span>
                </div>
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
