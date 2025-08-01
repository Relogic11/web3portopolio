// Mock data for Allen Elzayn's Systems Architecture Portfolio

export const personalInfo = {
  name: "Allen Elzayn",
  title: "System Architect & Tech Lead",
  tagline: "Building Tomorrow's Technology Today - From AI & Blockchain to E-commerce & UMKM Solutions",
  shortBio: "Cross-disciplinary technology innovator with 8+ years of experience leading specialized development teams to build solutions from cutting-edge AI and blockchain systems to practical e-commerce and business management platforms. Started coding at age 9 and have been building breakthrough technology solutions ever since. Leading a focused team of 4 specialists: AI/ML Engineer, Blockchain Developer, Full-Stack Developer, and Mobile/IoT Specialist.",
  bio: "My journey into technology began when I was just 9 years old, driven by an insatiable curiosity about how things work and a desire to create something meaningful. What started as simple HTML pages quickly evolved into a passion for solving complex problems through code. By age 12, I had built my first neural network using Python and NumPy - not because I understood all the math, but because I was fascinated by the idea of machines that could learn.\n\nThroughout my teenage years, I immersed myself in every programming language I could find. Late nights were spent reading documentation, debugging code, and building projects that no one asked for but that taught me invaluable lessons. I won several national programming competitions, not just for the recognition, but because they pushed me to think differently and solve problems under pressure.\n\nThe transition from hobby to profession wasn't just about mastering technology - it was about understanding that great software serves people, not the other way around. This philosophy has guided every project I've undertaken, from building trading bots that handle millions in transactions to creating simple POS systems for local warung owners.\n\nToday, I lead a specialized team of 4 experts: an AI/ML Engineer, Blockchain Developer, Full-Stack Developer, and Mobile/IoT Specialist. Together, we bridge the gap between cutting-edge innovation and real-world business needs. Whether it's implementing quantum-safe cryptography for security firms or building e-commerce platforms for local businesses, the core mission remains the same: use technology to create meaningful impact.\n\nWhat drives me most is the continuous learning curve. Technology evolves rapidly, and staying ahead means never stopping to learn. Every project teaches something new, every challenge demands creative solutions, and every client brings unique perspectives that expand my understanding. This isn't just work - it's a never-ending journey of growth, innovation, and problem-solving that gets more exciting with each passing year.",
  email: "hi@allenarch.dev",
  phone: "+65 9095 7469",
  location: "Tanglin, Singapore",
  linkedin: "https://linkedin.com/in/allenelzayn",
  github: "https://github.com/allenelzayn",
  website: "https://allenarch.dev"
};

export const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Rust", "Go", "PHP", "Java", "C++", "Solidity"] },
  { category: "Frontend Frameworks", items: ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Tailwind CSS", "Bootstrap", "Material-UI"] },
  { category: "Backend Frameworks", items: ["Node.js", "Express.js", "FastAPI", "Django", "Flask", "Laravel", "Spring Boot", "Actix Web"] },
  { category: "Blockchain & Web3", items: ["Solana", "Ethereum", "Polygon", "Binance Smart Chain", "Web3.js", "ethers.js", "Anchor Framework"] },
  { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "Computer Vision", "NLP", "LangChain", "Ollama"] },
  { category: "Database Technologies", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase", "Supabase", "Prisma"] },
  { category: "Mobile Development", items: ["React Native", "Flutter", "Expo", "Ionic", "PWA", "Tauri", "Capacitor"] },
  { category: "IoT & Hardware", items: ["Arduino", "Raspberry Pi", "ESP32", "LoRaWAN", "MQTT", "Edge Computing", "Sensor Networks"] },
  { category: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Vercel", "DigitalOcean", "Docker", "Kubernetes", "GitHub Actions", "Terraform"] }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Trading Bot Ecosystem",
    description: "Autonomous crypto trading system using reinforcement learning, real-time market analysis, and multi-exchange arbitrage",
    categories: ["AI/ML", "Blockchain", "Real-time Systems"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Python", "TensorFlow", "Web3.py", "Redis", "WebSocket", "AWS"],
    timeline: "3 months",
    impact: "Handles massive trading volume with 340% improved performance",
    details: "Built an intelligent trading ecosystem that combines machine learning prediction models with blockchain execution. Features include sentiment analysis, technical indicators ML, cross-exchange arbitrage, and autonomous position management.",
    clientType: "Crypto Fund"
  },
  {
    id: 2,
    title: "Smart City IoT Infrastructure",
    description: "Complete IoT ecosystem for smart traffic management, air quality monitoring, and predictive city analytics",
    categories: ["IoT", "Edge Computing", "Data Analytics"],
    bgColor: "white",
    textColor: "black", 
    technologies: ["Python", "LoRaWAN", "MQTT", "InfluxDB", "Grafana", "Edge AI"],
    timeline: "1 month",
    impact: "30% traffic reduction, real-time environmental monitoring",
    details: "Designed and deployed city-wide IoT network with 200+ sensors for traffic flow, air quality, noise levels, and pedestrian density. Includes predictive analytics for traffic optimization and environmental alerts.",
    clientType: "Government Agency"
  },
  {
    id: 3,
    title: "Decentralized Identity Platform",
    description: "Blockchain-based identity verification system with zero-knowledge proofs and cross-chain compatibility",
    categories: ["Blockchain", "Cryptography", "DeFi"],
    bgColor: "white", 
    textColor: "black",
    technologies: ["Solidity", "Zero-Knowledge", "IPFS", "Polygon", "React", "Node.js"],
    timeline: "4 months",
    impact: "50K+ verified identities, 99.9% security uptime",
    details: "Developed a revolutionary identity platform using zk-SNARKs for privacy-preserving verification. Features include cross-chain identity portability, reputation scoring, and integration with major DeFi protocols.",
    clientType: "Blockchain Startup"
  },
  {
    id: 4,
    title: "Computer Vision Quality Control System",
    description: "Real-time defect detection for manufacturing using advanced computer vision and edge AI processing",
    categories: ["Computer Vision", "AI/ML", "Industrial IoT"],
    bgColor: "white",
    textColor: "black",
    technologies: ["PyTorch", "OpenCV", "YOLO", "TensorRT", "MQTT", "React"],
    timeline: "3 months",
    impact: "98.7% accuracy, 60% reduction in manual inspection",
    details: "Built an automated quality control system using state-of-the-art computer vision models. Deployed on edge devices for real-time processing with sub-100ms detection latency and automated reporting.",
    clientType: "Manufacturing Company"
  },
  {
    id: 5,
    title: "Real-time Collaborative AR Platform",
    description: "WebRTC-based augmented reality platform for remote collaboration with 3D object manipulation and voice chat",
    categories: ["AR/VR", "Real-time Systems", "WebRTC"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Three.js", "WebRTC", "WebGL", "Socket.io", "React", "Node.js"],
    timeline: "4 months",
    impact: "10K+ concurrent users, used by 50+ remote teams",
    details: "Created a browser-based AR collaboration platform where teams can manipulate 3D objects in real-time, with spatial audio, screen sharing, and persistent virtual workspaces. No app installation required.",
    clientType: "Tech Startup"
  },
  {
    id: 6,
    title: "Quantum-Safe Messaging Protocol", 
    description: "Post-quantum cryptography messaging system with forward secrecy and distributed key management",
    categories: ["Cryptography", "Security", "Distributed Systems"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Go", "Post-Quantum Crypto", "libsodium", "WebRTC", "React Native"],
    timeline: "5 months",
    impact: "Military-grade security, 1M+ encrypted messages daily",
    details: "Developed next-generation secure messaging using post-quantum cryptographic algorithms. Features include perfect forward secrecy, distributed key exchange, and quantum-resistant end-to-end encryption.",
    clientType: "Security Firm"
  },
  {
    id: 7,
    title: "Neural Network Chip Optimizer",
    description: "Hardware-software co-design system for optimizing neural network inference on custom silicon",
    categories: ["Hardware Design", "AI/ML", "Low-level Programming"],
    bgColor: "white",
    textColor: "black", 
    technologies: ["CUDA", "Verilog", "C++", "TensorRT", "OpenCL", "Python"],
    timeline: "6 months",
    impact: "10x performance improvement over standard GPUs",
    details: "Designed custom neural processing units with optimized instruction sets for transformer architectures. Includes compiler toolchain, hardware simulator, and automated design space exploration.",
    clientType: "Semiconductor Startup"
  },
  {
    id: 8,
    title: "Distributed Climate Modeling System",
    description: "High-performance computing cluster for real-time climate simulation and weather prediction",
    categories: ["HPC", "Scientific Computing", "Distributed Systems"],
    bgColor: "white",
    textColor: "black",
    technologies: ["MPI", "CUDA", "Python", "Fortran", "Kubernetes", "HDF5"],
    timeline: "5 months", 
    impact: "Processes 1000+ climate variables in real-time",
    details: "Built a distributed computing system that simulates global climate patterns with unprecedented accuracy. Features include GPU-accelerated numerical solvers, real-time visualization, and predictive modeling.",
    clientType: "Research Institute"
  },
  {
    id: 9,
    title: "Brain-Computer Interface Framework",
    description: "Real-time neural signal processing system for controlling digital interfaces with thought patterns",
    categories: ["Neurotechnology", "Signal Processing", "Real-time Systems"], 
    bgColor: "white",
    textColor: "black",
    technologies: ["Python", "NumPy", "SciPy", "Real-time DSP", "C++", "Qt"],
    timeline: "6 months",
    impact: "95% accuracy in gesture recognition from neural signals",
    details: "Developed a complete BCI pipeline from raw neural signals to digital commands. Includes noise filtering, feature extraction, machine learning classification, and real-time feedback systems.",
    clientType: "Neurotechnology Lab"
  },
  {
    id: 10,
    title: "Multi-Store E-commerce Platform",
    description: "Complete e-commerce solution with multi-vendor support, payment gateway integration, and admin dashboard",
    categories: ["E-commerce", "Web Development", "Payment Systems"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Laravel", "MySQL", "Vue.js", "Midtrans", "Bootstrap", "jQuery"],
    timeline: "2 months",
    impact: "Supports 50+ vendors, processes 1000+ transactions daily",
    details: "Built comprehensive e-commerce platform with vendor management, product catalog, order processing, payment integration (Midtrans, Bank Transfer), and real-time notifications. Includes admin panel and mobile-responsive design.",
    clientType: "Local Business"
  },
  {
    id: 11,
    title: "Restaurant POS & Delivery System",
    description: "Point-of-sale system with inventory management, online ordering, and delivery tracking integration",
    categories: ["POS Systems", "Web Development", "Mobile App"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Laravel", "React Native", "MySQL", "Socket.io", "Payment Gateway"],
    timeline: "3 months",
    impact: "Reduced order processing time by 60%, integrated with GoFood/GrabFood",
    details: "Developed complete restaurant management solution with POS terminal, inventory tracking, online menu, delivery integration, and real-time order notifications. Includes mobile app for customers and delivery tracking.",
    clientType: "Restaurant Chain"
  },
  {
    id: 12,
    title: "Company Profile & CMS",
    description: "Professional corporate website with content management system and SEO optimization",
    categories: ["Web Development", "CMS", "SEO"],
    bgColor: "white",
    textColor: "black",
    technologies: ["Laravel", "MySQL", "Bootstrap", "jQuery", "SEO Tools"],
    timeline: "2 months",
    impact: "Improved search ranking to page 1 Google, 200% increase in inquiries",
    details: "Created professional company profile with custom CMS for easy content updates, blog system, contact forms, testimonials management, and comprehensive SEO optimization for Indonesian market.",
    clientType: "Manufacturing Company"
  },
  {
    id: 13,
    title: "UMKM Mobile App & Dashboard",
    description: "Mobile application for small business management with sales tracking and customer management",
    categories: ["Mobile App", "Business Management", "Dashboard"],
    bgColor: "white",
    textColor: "black",
    technologies: ["React Native", "Laravel API", "MySQL", "Chart.js", "Push Notifications"],
    timeline: "2 months",
    impact: "Helps 200+ UMKM track sales, manage inventory and customers digitally",
    details: "Developed mobile-first business management app for UMKM with sales recording, inventory management, customer database, financial reports, and promotional tools. Includes web dashboard for detailed analytics.",
    clientType: "UMKM Network"
  },
  {
    id: 14,
    title: "Solana DeFi Protocol & DEX",
    description: "Decentralized exchange and liquidity farming protocol built on Solana with high-speed transactions",
    categories: ["DeFi", "Solana", "Blockchain"],
    bgColor: "dark-purple",
    textColor: "black",
    technologies: ["Rust", "Anchor Framework", "Solana", "React", "TypeScript", "Web3.js"],
    timeline: "3 months",
    impact: "$2M+ TVL, 50K+ daily transactions, 5000+ active users",
    details: "Built complete DeFi ecosystem on Solana featuring automated market maker, yield farming, staking pools, and governance token. Ultra-fast transactions with minimal fees leveraging Solana's performance.",
    clientType: "DeFi Startup"
  },
  {
    id: 15,
    title: "Real-time Chat App with AI Assistant",
    description: "Modern chat application with AI-powered responses, file sharing, and end-to-end encryption",
    categories: ["Web App", "AI Integration", "Real-time"],
    bgColor: "light-blue",
    textColor: "black",
    technologies: ["Next.js", "Socket.io", "OpenAI GPT", "PostgreSQL", "Redis", "Tailwind"],
    timeline: "2 months",
    impact: "10K+ active users, 500K+ messages processed daily",
    details: "Created modern chat platform with AI assistant integration, real-time messaging, file sharing, voice messages, and end-to-end encryption. Features smart notifications and message analytics.",
    clientType: "Tech Startup"
  },
  {
    id: 16,
    title: "Desktop App with Tauri & Rust",
    description: "Cross-platform desktop application for file management with system integration and performance optimization",
    categories: ["Desktop App", "Rust", "System Programming"],
    bgColor: "mid-red",
    textColor: "black",
    technologies: ["Rust", "Tauri", "React", "TypeScript", "SQLite", "System APIs"],
    timeline: "2 months",
    impact: "50% faster than Electron alternatives, 80% less memory usage",
    details: "Built high-performance desktop app using Tauri and Rust backend. Features include advanced file operations, system tray integration, auto-updates, and native OS interactions with minimal resource footprint.",
    clientType: "Software Company"
  },
  {
    id: 17,
    title: "AI-Powered Code Review Platform",
    description: "Automated code analysis and review system using machine learning for bug detection and code optimization",
    categories: ["AI/ML", "Developer Tools", "Code Analysis"],
    bgColor: "dark-orange",
    textColor: "black",
    technologies: ["Python", "FastAPI", "Hugging Face", "Docker", "PostgreSQL", "React"],
    timeline: "3 months",
    impact: "95% bug detection accuracy, used by 100+ development teams",
    details: "Developed AI-powered platform that analyzes code commits, detects potential bugs, suggests optimizations, and provides automated code reviews. Integrates with GitHub/GitLab workflows.",
    clientType: "Enterprise"
  },
  {
    id: 18,
    title: "Microservices E-commerce with Kafka",
    description: "Scalable e-commerce platform using microservices architecture with event-driven communication",
    categories: ["Microservices", "E-commerce", "Event Streaming"],
    bgColor: "mid-green",
    textColor: "black",
    technologies: ["Node.js", "Kafka", "Docker", "Kubernetes", "MongoDB", "Redis", "Next.js"],
    timeline: "4 months",
    impact: "Handles 100K+ concurrent users, 99.9% uptime",
    details: "Architected scalable e-commerce platform with microservices for user management, inventory, payments, and notifications. Event-driven architecture ensures data consistency and real-time updates.",
    clientType: "E-commerce Giant"
  },
  {
    id: 19,
    title: "Flutter Fitness Tracking App",
    description: "Cross-platform fitness app with workout tracking, nutrition monitoring, and social features",
    categories: ["Mobile App", "Health Tech", "Social Platform"],
    bgColor: "light-orange",
    textColor: "black",
    technologies: ["Flutter", "Dart", "Firebase", "Google Fit API", "Supabase", "Stripe"],
    timeline: "3 months",
    impact: "50K+ downloads, 4.8★ app store rating, 10K+ active users",
    details: "Created comprehensive fitness app with workout plans, progress tracking, nutrition logging, social challenges, and premium subscription features. Integrates with wearable devices and health platforms.",
    clientType: "Health Startup"
  },
  {
    id: 20,
    title: "Real-time Analytics Dashboard",
    description: "High-performance analytics platform for processing millions of events with real-time visualizations",
    categories: ["Analytics", "Big Data", "Visualization"],
    bgColor: "dark-blue",
    textColor: "black",
    technologies: ["Python", "ClickHouse", "Apache Kafka", "React", "D3.js", "WebSocket"],
    timeline: "3 months",
    impact: "Processes 10M+ events/day, sub-second query response",
    details: "Built real-time analytics platform that ingests massive data streams, processes events in real-time, and provides interactive dashboards with custom visualizations and alerting systems.",
    clientType: "Data Company"
  }
];

export const team = [
  {
    id: 1,
    name: "Allen Elzayn",
    role: "Tech Lead & Full-Stack Architect",
    specialties: ["System Architecture", "Project Management", "Full-Stack Development"],
    experience: "8+ years",
    bio: "Technical leadership and end-to-end solution architecture. Bridges business requirements with technical implementation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "AI/ML Engineer",
    specialties: ["Machine Learning", "Computer Vision", "Deep Learning"],
    experience: "6+ years", 
    bio: "Specialist in AI model development, training, and deployment. Expert in TensorFlow, PyTorch, and production ML systems.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Blockchain Developer",
    specialties: ["Smart Contracts", "DeFi", "Web3 Integration"],
    experience: "5+ years",
    bio: "Expert in Solidity, Web3 development, and decentralized application architecture. Security-focused blockchain solutions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Lisa Wang",
    role: "Mobile & IoT Specialist", 
    specialties: ["React Native", "Flutter", "IoT Systems"],
    experience: "4+ years",
    bio: "Cross-platform mobile development and IoT integration specialist. Creates seamless user experiences across all devices.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

export const experience = [
  {
    company: "Independent Technology Consultant",
    role: "System Architect & Team Lead",
    period: "2021 - Present",
    location: "Tanglin, Singapore",
    summary: "Leading breakthrough technology solutions with a specialized team of 4 experts across AI/ML, Blockchain, Full-Stack, and Mobile/IoT domains.",
    keyMetrics: ["50+ Production Systems", "99.9% Uptime", "100% Client Retention"],
    highlights: [
      "Architected quantum-safe cryptography and brain-computer interface systems",
      "Reduced project delivery time by 40% through scalable development processes",
      "Built comprehensive client relationship management driving referral growth"
    ]
  },
  {
    company: "Independent Development & Consulting",
    role: "Technology Consultant & System Developer", 
    period: "2019 - 2021",
    location: "Choa Chu Kang, Singapore",
    summary: "Specialized in system architecture design and advanced AI/ML research including deep learning, computer vision, and edge computing implementations.",
    keyMetrics: ["Complex System Design", "AI/ML Expertise", "Enterprise Solutions"],
    highlights: [
      "Developed proprietary real-time data processing algorithms",
      "Deep expertise in AI/ML, computer vision, and LLM implementations",
      "Scaled prototype systems to production-grade solutions"
    ]
  },
  {
    company: "Blockchain Innovation & Security",
    role: "Lead Smart Contract Developer",
    period: "2018 - 2019", 
    location: "Remote (Global)",
    summary: "Specialized in DeFi protocol development, security auditing, and cross-chain bridge solutions for blockchain startups.",
    keyMetrics: ["20+ DeFi Protocols", "Zero Security Vulnerabilities", "Multi-Chain Support"],
    highlights: [
      "Built cross-chain bridges connecting Ethereum, Polygon, and BSC ecosystems",
      "Established security-first practices adopted industry-wide",
      "Optimized gas usage and automated testing frameworks"
    ]
  },
  {
    company: "Professional Development Foundation",
    role: "Full-Stack Developer & Consultant",
    period: "2017 - 2018", 
    location: "Jakarta, Indonesia",
    summary: "Established professional reputation through diverse client projects, from e-commerce platforms to business management systems.",
    keyMetrics: ["25+ Web Applications", "Ahead-of-Schedule Delivery", "Strong Client Network"],
    highlights: [
      "Mastered Laravel, React, and database optimization techniques",
      "Created reusable component libraries accelerating future projects",
      "Built foundation for transitioning to team-based operations"
    ]
  },
  {
    company: "Intensive Learning & Growth",
    role: "Self-Directed Technology Explorer",
    period: "2014 - 2017", 
    location: "Jakarta, Indonesia",
    summary: "Transformed from curious beginner to advanced developer through intensive self-study, competitions, and hands-on projects.",
    keyMetrics: ["90+ Projects Built", "15+ Competition Wins", "Multiple Languages Mastered"],
    highlights: [
      "Built first neural network at age 12 using Python and NumPy",
      "Won regional programming competitions while in middle school",
      "Created first commercial website at age 13 for local business"
    ]
  },
  {
    company: "The Foundation Years",
    role: "Young Developer Discovery",
    period: "2009 - 2014", 
    location: "Jakarta, Indonesia",
    summary: "The beginning of an extraordinary journey - from simple HTML pages at age 9 to building interactive applications and neural networks.",
    keyMetrics: ["Age 9 Start", "First Neural Network at 12", "Early Business Impact"],
    highlights: [
      "Started with HTML/CSS, progressed to JavaScript and PHP",
      "Built interactive games and calculators for school projects",
      "Established continuous learning mindset defining entire career"
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
    description: "Custom AI models, computer vision systems, NLP applications, and intelligent automation for enterprise clients",
    icon: "Code"
  },
  {
    title: "Blockchain & Web3 Development", 
    description: "Smart contracts, DeFi protocols, NFT platforms, and decentralized applications for global markets",
    icon: "Smartphone"
  },
  {
    title: "E-commerce & Business Systems", 
    description: "Complete online stores, POS systems, inventory management, and payment gateway integration for local businesses",
    icon: "ShoppingCart"
  },
  {
    title: "IoT & Advanced Web Technologies",
    description: "Connected device networks, WebGL applications, real-time systems, and high-performance web solutions",
    icon: "Settings"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS/Android, including React Native and Flutter solutions",
    icon: "Smartphone"
  },
  {
    title: "Web Development & CMS",
    description: "Modern websites, company profiles, custom CMS, and SEO-optimized solutions using Laravel, React, and PHP",
    icon: "Code"
  },
  {
    title: "API Development & Integration",
    description: "RESTful APIs, third-party integrations, microservices architecture, and system interconnectivity solutions",
    icon: "Settings"
  },
  {
    title: "DevOps & Cloud Solutions",
    description: "AWS/GCP deployment, Docker containerization, CI/CD pipelines, and scalable cloud infrastructure setup",
    icon: "Settings"
  }
];

export const heroSlides = [
  {
    id: 1,
    project: projects[0],
    backgroundColor: "#000000",
    textColor: "#ffffff"
  },
  {
    id: 2, 
    project: projects[1],
    backgroundColor: "#ffffff", 
    textColor: "#000000"
  },
  {
    id: 3,
    project: projects[2],
    backgroundColor: "#000000",
    textColor: "#ffffff"  
  },
  {
    id: 4,
    project: projects[3], 
    backgroundColor: "#ffffff",
    textColor: "#000000"
  }
];