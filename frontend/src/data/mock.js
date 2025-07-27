// Mock data for Allen Elzayn's Systems Architecture Portfolio

export const personalInfo = {
  name: "Allen Elzayn",
  title: "Full-Stack Developer & Tech Innovator",
  tagline: "Building Tomorrow's Technology Today - AI, Blockchain, IoT & Beyond",
  bio: "Cross-disciplinary technology innovator with 8+ years of experience building cutting-edge solutions across AI, blockchain, IoT, and advanced web technologies. Started coding at age 9 and have been pushing technological boundaries ever since. Specializing in AI-powered applications, decentralized systems, computer vision, and complex distributed architectures. Working with startups, enterprises, and visionary founders who want to create the future.",
  email: "allen.elzayn@email.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/allenelzayn",
  github: "https://github.com/allenelzayn",
  website: "https://allenelzayn.dev"
};

export const skills = [
  { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "OpenAI GPT", "Computer Vision", "NLP", "LangChain"] },
  { category: "Blockchain & Web3", items: ["Solidity", "Ethereum", "Polygon", "Web3.js", "DeFi", "Smart Contracts"] },
  { category: "Web Development (PHP/JS)", items: ["Laravel", "CodeIgniter", "PHP", "MySQL", "jQuery", "Bootstrap", "Vue.js"] },
  { category: "Modern Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "Tailwind", "TypeScript"] },
  { category: "Backend & Database", items: ["Node.js", "Python", "Laravel", "MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Mobile Development", items: ["React Native", "Flutter", "Ionic", "PWA", "Cordova"] },
  { category: "E-commerce & Business", items: ["WooCommerce", "Shopify", "Payment Gateway", "POS Systems", "CRM", "ERP"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "DigitalOcean", "cPanel", "Docker", "CI/CD"] }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Trading Bot Ecosystem",
    description: "Autonomous crypto trading system using reinforcement learning, real-time market analysis, and multi-exchange arbitrage",
    categories: ["AI/ML", "Blockchain", "Real-time Systems"],
    bgColor: "light-pink",
    textColor: "black",
    technologies: ["Python", "TensorFlow", "Web3.py", "Redis", "WebSocket", "AWS"],
    timeline: "8 months",
    impact: "Handles massive trading volume with 340% improved performance",
    details: "Built an intelligent trading ecosystem that combines machine learning prediction models with blockchain execution. Features include sentiment analysis, technical indicators ML, cross-exchange arbitrage, and autonomous position management.",
    clientType: "Crypto Fund"
  },
  {
    id: 2,
    title: "Smart City IoT Infrastructure",
    description: "Complete IoT ecosystem for smart traffic management, air quality monitoring, and predictive city analytics",
    categories: ["IoT", "Edge Computing", "Data Analytics"],
    bgColor: "mid-blue",
    textColor: "white", 
    technologies: ["Python", "LoRaWAN", "MQTT", "InfluxDB", "Grafana", "Edge AI"],
    timeline: "12 months",
    impact: "30% traffic reduction, real-time environmental monitoring",
    details: "Designed and deployed city-wide IoT network with 200+ sensors for traffic flow, air quality, noise levels, and pedestrian density. Includes predictive analytics for traffic optimization and environmental alerts.",
    clientType: "Government Agency"
  },
  {
    id: 3,
    title: "Decentralized Identity Platform",
    description: "Blockchain-based identity verification system with zero-knowledge proofs and cross-chain compatibility",
    categories: ["Blockchain", "Cryptography", "DeFi"],
    bgColor: "dark-green", 
    textColor: "white",
    technologies: ["Solidity", "Zero-Knowledge", "IPFS", "Polygon", "React", "Node.js"],
    timeline: "10 months",
    impact: "50K+ verified identities, 99.9% security uptime",
    details: "Developed a revolutionary identity platform using zk-SNARKs for privacy-preserving verification. Features include cross-chain identity portability, reputation scoring, and integration with major DeFi protocols.",
    clientType: "Blockchain Startup"
  },
  {
    id: 4,
    title: "Computer Vision Quality Control System",
    description: "Real-time defect detection for manufacturing using advanced computer vision and edge AI processing",
    categories: ["Computer Vision", "AI/ML", "Industrial IoT"],
    bgColor: "mid-purple",
    textColor: "white",
    technologies: ["PyTorch", "OpenCV", "YOLO", "TensorRT", "MQTT", "React"],
    timeline: "6 months",
    impact: "98.7% accuracy, 60% reduction in manual inspection",
    details: "Built an automated quality control system using state-of-the-art computer vision models. Deployed on edge devices for real-time processing with sub-100ms detection latency and automated reporting.",
    clientType: "Manufacturing Company"
  },
  {
    id: 5,
    title: "Real-time Collaborative AR Platform",
    description: "WebRTC-based augmented reality platform for remote collaboration with 3D object manipulation and voice chat",
    categories: ["AR/VR", "Real-time Systems", "WebRTC"],
    bgColor: "light-yellow",
    textColor: "black",
    technologies: ["Three.js", "WebRTC", "WebGL", "Socket.io", "React", "Node.js"],
    timeline: "9 months",
    impact: "10K+ concurrent users, used by 50+ remote teams",
    details: "Created a browser-based AR collaboration platform where teams can manipulate 3D objects in real-time, with spatial audio, screen sharing, and persistent virtual workspaces. No app installation required.",
    clientType: "Tech Startup"
  },
  {
    id: 6,
    title: "Quantum-Safe Messaging Protocol", 
    description: "Post-quantum cryptography messaging system with forward secrecy and distributed key management",
    categories: ["Cryptography", "Security", "Distributed Systems"],
    bgColor: "mid-orange",
    textColor: "black",
    technologies: ["Go", "Post-Quantum Crypto", "libsodium", "WebRTC", "React Native"],
    timeline: "14 months",
    impact: "Military-grade security, 1M+ encrypted messages daily",
    details: "Developed next-generation secure messaging using post-quantum cryptographic algorithms. Features include perfect forward secrecy, distributed key exchange, and quantum-resistant end-to-end encryption.",
    clientType: "Security Firm"
  },
  {
    id: 7,
    title: "Neural Network Chip Optimizer",
    description: "Hardware-software co-design system for optimizing neural network inference on custom silicon",
    categories: ["Hardware Design", "AI/ML", "Low-level Programming"],
    bgColor: "light-pink",
    textColor: "black", 
    technologies: ["CUDA", "Verilog", "C++", "TensorRT", "OpenCL", "Python"],
    timeline: "16 months",
    impact: "10x performance improvement over standard GPUs",
    details: "Designed custom neural processing units with optimized instruction sets for transformer architectures. Includes compiler toolchain, hardware simulator, and automated design space exploration.",
    clientType: "Semiconductor Startup"
  },
  {
    id: 8,
    title: "Distributed Climate Modeling System",
    description: "High-performance computing cluster for real-time climate simulation and weather prediction",
    categories: ["HPC", "Scientific Computing", "Distributed Systems"],
    bgColor: "mid-blue",
    textColor: "white",
    technologies: ["MPI", "CUDA", "Python", "Fortran", "Kubernetes", "HDF5"],
    timeline: "18 months", 
    impact: "Processes 1000+ climate variables in real-time",
    details: "Built a distributed computing system that simulates global climate patterns with unprecedented accuracy. Features include GPU-accelerated numerical solvers, real-time visualization, and predictive modeling.",
    clientType: "Research Institute"
  },
  {
    id: 9,
    title: "Brain-Computer Interface Framework",
    description: "Real-time neural signal processing system for controlling digital interfaces with thought patterns",
    categories: ["Neurotechnology", "Signal Processing", "Real-time Systems"], 
    bgColor: "dark-green",
    textColor: "white",
    technologies: ["Python", "NumPy", "SciPy", "Real-time DSP", "C++", "Qt"],
    timeline: "20 months",
    impact: "95% accuracy in gesture recognition from neural signals",
    details: "Developed a complete BCI pipeline from raw neural signals to digital commands. Includes noise filtering, feature extraction, machine learning classification, and real-time feedback systems.",
    clientType: "Neurotechnology Lab"
  }
];

export const experience = [
  {
    company: "Independent Tech Innovator",
    role: "Full-Stack Developer & AI Specialist",
    period: "2021 - Present",
    location: "Jakarta, Indonesia",
    achievements: [
      "Built cutting-edge systems across AI, blockchain, and IoT domains for enterprise clients", 
      "Developed systems processing massive data volumes with 99.9% uptime and reliability",
      "Pioneered quantum-safe cryptography and brain-computer interface technologies"
    ]
  },
  {
    company: "TechVision Labs",
    role: "Lead Developer & Research Engineer", 
    period: "2019 - 2021",
    location: "Jakarta, Indonesia",
    achievements: [
      "Led R&D team developing computer vision and IoT solutions for smart city projects",
      "Published 3 research papers on edge AI optimization and real-time processing",
      "Scaled systems from prototype to 100K+ concurrent users with 99.9% uptime"
    ]
  },
  {
    company: "Blockchain Dynamics",
    role: "Smart Contract Developer",
    period: "2017 - 2019", 
    location: "Remote",
    achievements: [
      "Developed DeFi protocols with advanced security and cross-chain compatibility",
      "Audited and optimized smart contracts for zero-vulnerability deployment",
      "Built cross-chain bridges connecting multiple blockchain networks"
    ]
  },
  {
    company: "Early Programming Journey",
    role: "Self-Taught Developer",
    period: "2016 - 2017 (Started coding at age 9)", 
    location: "Jakarta, Indonesia",
    achievements: [
      "Started programming at age 9, mastering multiple languages and frameworks",
      "Built first neural network implementation at age 12 using Python and NumPy",
      "Won national programming competitions and hackathons throughout school years"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Michael Chen",
    role: "CTO",
    company: "CryptoVault Capital",
    content: "Allen's AI trading system revolutionized our operations! The autonomous bot generated 340% ROI and handled $2.3M in volume flawlessly. His expertise in machine learning and blockchain is unmatched. Best investment we ever made!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Rodriguez", 
    role: "Head of Innovation",
    company: "SmartCity Jakarta",
    content: "The IoT infrastructure Allen built transformed our city management! 200+ sensors providing real-time data, 30% traffic reduction, and predictive analytics that actually work. This is the future of smart cities!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "David Kim",
    role: "Founder & CEO", 
    company: "SecureComm Technologies",
    content: "Allen's quantum-safe messaging protocol is absolutely brilliant! Military-grade security handling 1M+ daily encrypted messages. His understanding of post-quantum cryptography is phenomenal. This will protect us for decades!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  }
];

export const services = [
  {
    title: "AI & Machine Learning Solutions",
    description: "Custom AI models, computer vision systems, NLP applications, and intelligent automation",
    icon: "Code"
  },
  {
    title: "Blockchain & Web3 Development", 
    description: "Smart contracts, DeFi protocols, NFT platforms, and decentralized applications",
    icon: "Smartphone"
  },
  {
    title: "IoT & Edge Computing Systems",
    description: "Connected device networks, sensor integration, real-time analytics, and edge AI deployment", 
    icon: "ShoppingCart"
  },
  {
    title: "Advanced Web Technologies",
    description: "WebGL applications, real-time systems, AR/VR experiences, and high-performance web apps",
    icon: "Settings"
  }
];

export const heroSlides = [
  {
    id: 1,
    project: projects[0],
    backgroundColor: "#ff3d71",
    textColor: "#ffffff"
  },
  {
    id: 2, 
    project: projects[1],
    backgroundColor: "#1f47e6", 
    textColor: "#ffffff"
  },
  {
    id: 3,
    project: projects[2],
    backgroundColor: "#a1a500",
    textColor: "#ffffff"  
  },
  {
    id: 4,
    project: projects[3], 
    backgroundColor: "#d987ff",
    textColor: "#ffffff"
  }
];