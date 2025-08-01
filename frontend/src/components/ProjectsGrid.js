import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/mock';
import { ExternalLink, ArrowRight } from 'lucide-react';
import TechIcon from './TechIcon';
import clsx from 'clsx';

const ProjectsGrid = () => {
  // Debug: Check if projects data is loaded
  console.log('ProjectsGrid: projects data length:', projects?.length);
  console.log('Projects data:', projects);
  
  // Early return if no projects
  if (!projects || projects.length === 0) {
    return (
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Featured Projects</h2>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </section>
    );
  }

  // Take only first 6 projects for featured section
  const featuredProjects = projects.slice(0, 6);
  console.log('Featured projects:', featuredProjects.map(p => p.title));
  
  // Tech icons mapping for projects
  const techIconMap = {
    // Programming Languages
    "Python": "python",
    "JavaScript": "javascript",
    "TypeScript": "typescript", 
    "Go": "go",
    "Rust": "rust",
    "Solidity": "Solidity", // Found: Solidity.svg
    "C++": "cplusplus",
    "Dart": "dart",
    "C": "c",
    "Fortran": "fortran",
    
    // Frontend Frameworks
    "React": "react",
    "Next.js": "nextjs",
    "Vue.js": "vuejs",
    "Three.js": "Three.js", // Found: Three.js.svg
    "Flutter": "flutter",
    "React Native": "react",
    "Angular": "angular",
    "Svelte": "svelte",
    
    // Backend & APIs
    "Node.js": "nodejs", 
    "Laravel": "laravel",
    "FastAPI": "fastapi",
    "TensorFlow": "TensorFlow", // Found: TensorFlow.svg
    "PyTorch": "pytorch",
    "Django": "django",
    "Flask": "flask",
    "Express": "express",
    
    // Databases
    "MySQL": "mysql",
    "PostgreSQL": "postgresql", 
    "MongoDB": "mongodb",
    "Redis": "redis",
    "Firebase": "firebase",
    "ClickHouse": "clickhouse",
    "InfluxDB": "influxdb",
    "SQLite": "sqlite",
    "Supabase": "supabase",
    
    // DevOps & Cloud
    "Docker": "docker",
    "Kubernetes": "kubernetes", 
    "AWS": "amazonwebservices",
    "Kafka": "apachekafka",
    "Apache Kafka": "apachekafka",
    "CUDA": "nvidia",
    "MPI": "openmpi",
    
    // Blockchain & Web3
    "Web3.js": "web3js",
    "Web3.py": "python", // Web3.py is a Python library
    "Ethereum": "ethereum",
    "Solana": "solana",
    "Polygon": "polygon",
    "IPFS": "ipfs",
    "Anchor Framework": "solana",
    "Zero-Knowledge": "ethereum", // Use ethereum for ZK proofs
    "Post-Quantum Crypto": "encrypt", // Use encryption icon
    
    // AI & ML
    "OpenAI GPT": "openai",
    "Hugging Face": "huggingface",
    "OpenCV": "opencv",
    "YOLO": "yolo",
    "TensorRT": "tensorrt-logo", // Found: tensorrt-logo.svg
    "NumPy": "numpy",
    "SciPy": "scipy",
    "Edge AI": "tensorflow", // Use TensorFlow for Edge AI
    
    // Communication & Protocols
    "WebSocket": "websocket-svgrepo-com", // Found: websocket-svgrepo-com.svg
    "Socket.io": "Socket.io", // Found: Socket.io.svg
    "MQTT": "iot", // Use IoT icon for MQTT
    "WebRTC": "webrtc-svgrepo-com", // Found: webrtc-svgrepo-com.svg
    "LoRaWAN": "iot", // Use IoT icon for LoRaWAN
    "WebGL": "webgl-svgrepo-com", // Found: webgl-svgrepo-com.svg
    
    // UI & Styling
    "Bootstrap": "bootstrap",
    "Tailwind": "tailwindcss",
    "jQuery": "jquery",
    "Chart.js": "chartdotjs",
    "D3.js": "d3dotjs",
    
    // Tools & Others
    "Grafana": "grafana",
    "Verilog": "verilog",
    "Qt": "qt",
    "Tauri": "tauri",
    "Midtrans": "midtrans",
    "Stripe": "stripe",
    "HDF5": "hdf5",
    "WebGL": "webgl",
    "OpenCL": "opencl",
    "libsodium": "libsodium",
    "Real-time DSP": "waveform", // Use waveform icon for DSP
    "System APIs": "api", // Use API icon
    "Payment Gateway": "stripe", // Use Stripe for payment gateway
    "Push Notifications": "notification", // Use notification icon
    "SEO Tools": "search", // Use search icon
    "Google Fit API": "googlefit", // Google Fit icon
    "TailwindCSS": "tailwindcss",
    "Vite": "vite"
  };
  
  const getTechIcon = (techName) => {
    return techIconMap[techName] || "code"; // Fallback to generic code icon
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2, // Even faster
        staggerChildren: 0.05, // Much quicker stagger
        delayChildren: 0, // No delay
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, // Minimal movement
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Quick animation
        ease: "easeOut",
      },
    },
  };

  const getCardStyles = (bgColor) => {
    const colorMap = {
      'light-pink': 'bg-pink-100 text-black',
      'mid-blue': 'bg-blue-600 text-white',
      'dark-green': 'bg-green-700 text-white',
      'mid-purple': 'bg-purple-500 text-white',
      'light-yellow': 'bg-yellow-200 text-black',
      'mid-orange': 'bg-orange-500 text-white',
      'white': 'bg-white text-black', // Add white mapping
    };
    const style = colorMap[bgColor] || 'bg-white text-black'; // Fallback to white
    console.log(`Card style for ${bgColor}:`, style);
    return style;
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Try fallback without motion first */}
        <div className="opacity-100">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real client projects that delivered results and exceeded expectations
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              console.log(`Rendering featured project ${index + 1}:`, project.title);
              
              // Check if project has required fields
              if (!project.title || !project.description || !project.technologies) {
                console.error(`Project ${index + 1} missing required fields:`, project);
                return null;
              }
              
              return (
                <div
                  key={project.id}
                  className={clsx(
                    'project-card rounded-lg p-6 h-full flex flex-col justify-between overflow-hidden relative transition-transform duration-200 hover:transform hover:-translate-y-1', 
                    getCardStyles(project.bgColor)
                  )}
                >
                  {/* Background Pattern with Tech Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <TechIcon 
                      name={getTechIcon(project.technologies[0])} 
                      size={40} 
                      className="text-current" 
                    />
                  </div>

                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold transition-all duration-200"> {/* Removed group-hover:underline */}
                        {project.title}
                      </h3>
                      <ExternalLink 
                        size={18} 
                        className="opacity-40" /* Reduced opacity since not interactive */
                      />
                    </div>
                    
                    <p className="text-base opacity-80 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="text-sm opacity-70 mb-4">
                      <strong>Timeline:</strong> {project.timeline}
                    </div>
                  </div>

                  {/* Technologies with Icons */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-current opacity-80 bg-white/20 backdrop-blur-sm">
                          <TechIcon 
                            name={getTechIcon(tech)} 
                            size={12} 
                            className="text-current flex-shrink-0" 
                          />
                          <span>{tech}</span>
                        </div>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-mono opacity-60">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold opacity-90">
                        {project.impact}
                      </div>
                      <ArrowRight 
                        size={16} 
                        className="opacity-40" /* Removed hover effect since not clickable */
                      />
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* View Projects Page Button */}
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-block px-8 py-4 border border-white text-white font-mono uppercase text-sm tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-200"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;