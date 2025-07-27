// Mock data for Allen Elzayn's Systems Architecture Portfolio

export const personalInfo = {
  name: "Allen Elzayn",
  title: "Full-Stack Developer & Tech Innovator",
  tagline: "Building Tomorrow's Technology Today - AI, Blockchain, IoT & Beyond",
  bio: "Cross-disciplinary technology innovator specializing in AI-powered applications, blockchain solutions, IoT systems, and advanced web technologies. 6+ years building cutting-edge solutions that merge multiple domains - from machine learning pipelines to decentralized applications, smart contracts to computer vision systems. Working with startups, enterprises, and visionary founders who want to push technological boundaries.",
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
  { category: "IoT & Hardware", items: ["Arduino", "Raspberry Pi", "MQTT", "LoRaWAN", "Edge Computing", "Sensors"] },
  { category: "Advanced Frontend", items: ["React", "Next.js", "Three.js", "WebGL", "WebRTC", "PWA"] },
  { category: "Backend & Infrastructure", items: ["Node.js", "Python", "Go", "Rust", "Kubernetes", "Microservices"] },
  { category: "Data & Analytics", items: ["BigQuery", "Apache Kafka", "Redis", "Neo4j", "InfluxDB", "Grafana"] },
  { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Terraform", "CI/CD", "Monitoring"] }
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
    impact: "$2.3M+ in trading volume, 340% ROI for clients",
    details: "Built an intelligent trading ecosystem that combines machine learning prediction models with blockchain execution. Features include sentiment analysis, technical indicators ML, cross-exchange arbitrage, and autonomous position management.",
    clientType: "Crypto Fund",
    projectValue: "$85,000"
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
    clientType: "Government Agency",
    projectValue: "$120,000"
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
    clientType: "Blockchain Startup",
    projectValue: "$95,000"
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
    clientType: "Manufacturing Company",
    projectValue: "$75,000"
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
    clientType: "Tech Startup",
    projectValue: "$110,000"
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
    clientType: "Security Firm",
    projectValue: "$150,000"
  }
];

export const experience = [
  {
    company: "Independent Tech Innovator",
    role: "Full-Stack Developer & AI Specialist",
    period: "2021 - Present",
    location: "Jakarta, Indonesia",
    achievements: [
      "Delivered $650K+ worth of cutting-edge projects across AI, blockchain, and IoT domains", 
      "Built systems processing $2.3M+ in daily trading volume and 50K+ user interactions",
      "Pioneered quantum-safe cryptography implementation for enterprise security solutions"
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
    period: "2018 - 2019", 
    location: "Remote",
    achievements: [
      "Developed DeFi protocols handling $50M+ total value locked (TVL)",
      "Audited and optimized smart contracts for zero-vulnerability deployment",
      "Built cross-chain bridges connecting Ethereum, Polygon, and Binance Smart Chain"
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
    icon: "Code",
    price: "Starting from $25,000"
  },
  {
    title: "Blockchain & Web3 Development", 
    description: "Smart contracts, DeFi protocols, NFT platforms, and decentralized applications",
    icon: "Smartphone",
    price: "Starting from $30,000"
  },
  {
    title: "IoT & Edge Computing Systems",
    description: "Connected device networks, sensor integration, real-time analytics, and edge AI deployment", 
    icon: "ShoppingCart",
    price: "Starting from $40,000"
  },
  {
    title: "Advanced Web Technologies",
    description: "WebGL applications, real-time systems, AR/VR experiences, and high-performance web apps",
    icon: "Settings",
    price: "Starting from $20,000"
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