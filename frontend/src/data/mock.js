// Mock data for Allen Elzayn's Systems Architecture Portfolio

export const personalInfo = {
  name: "Allen Elzayn",
  title: "Freelance Developer & Systems Architect",
  tagline: "Building Digital Solutions for Modern Businesses",
  bio: "Freelance developer and systems architect with 5+ years of experience helping businesses build and scale their digital presence. I work with startups, agencies, and growing companies to create custom web applications, optimize system performance, and implement modern development solutions. Available for both short-term projects and long-term partnerships.",
  email: "allen.elzayn@email.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  linkedin: "https://linkedin.com/in/allenelzayn",
  github: "https://github.com/allenelzayn",
  website: "https://allenelzayn.dev"
};

export const skills = [
  { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"] },
  { category: "Architecture Patterns", items: ["Microservices", "Event-Driven", "CQRS", "Domain-Driven Design", "Serverless"] },
  { category: "Programming Languages", items: ["Python", "Java", "Go", "TypeScript", "Rust"] },
  { category: "Data & Storage", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka"] },
  { category: "DevOps & Tools", items: ["Terraform", "Jenkins", "GitLab CI", "Prometheus", "Grafana"] }
];

export const projects = [
  {
    id: 1,
    title: "Global E-commerce Platform",
    description: "Architected a microservices-based e-commerce platform handling 10M+ daily transactions with 99.99% uptime",
    categories: ["Microservices", "Cloud Architecture", "Performance"],
    bgColor: "light-pink",
    textColor: "black",
    technologies: ["AWS", "Kubernetes", "Java", "PostgreSQL", "Redis"],
    timeline: "2024 - Present",
    impact: "40% reduction in response time, 60% cost optimization",
    details: "Led the complete architectural redesign of a legacy monolithic e-commerce system. Implemented event-driven architecture with CQRS pattern, resulting in improved scalability and maintainability."
  },
  {
    id: 2,
    title: "Real-time Analytics Engine",
    description: "Built a distributed analytics platform processing 50TB+ data daily with sub-second query response times",
    categories: ["Data Architecture", "Real-time Processing", "Analytics"],
    bgColor: "mid-blue",
    textColor: "white", 
    technologies: ["Apache Kafka", "Elasticsearch", "Python", "Docker", "Grafana"],
    timeline: "2023 - 2024",
    impact: "10x faster query performance, real-time insights",
    details: "Designed and implemented a lambda architecture for real-time data processing. Created a unified data lake with automated ETL pipelines and interactive dashboards."
  },
  {
    id: 3,
    title: "Enterprise Security Framework",
    description: "Developed zero-trust security architecture for Fortune 500 company with advanced threat detection",
    categories: ["Security", "Enterprise", "Zero Trust"],
    bgColor: "dark-green", 
    textColor: "white",
    technologies: ["OAuth 2.0", "JWT", "Vault", "Istio", "Prometheus"],
    timeline: "2022 - 2023",
    impact: "90% reduction in security incidents, SOC 2 compliance",
    details: "Implemented comprehensive security-first architecture with automated threat detection, identity management, and compliance monitoring across hybrid cloud infrastructure."
  },
  {
    id: 4,
    title: "Cloud Migration Strategy",
    description: "Orchestrated migration of 200+ legacy applications to cloud-native architecture with minimal downtime",
    categories: ["Cloud Migration", "DevOps", "Strategy"],
    bgColor: "mid-purple",
    textColor: "white",
    technologies: ["AWS", "Terraform", "Jenkins", "Docker", "Ansible"],
    timeline: "2021 - 2022", 
    impact: "70% infrastructure cost reduction, 50% faster deployments",
    details: "Led comprehensive cloud transformation initiative including containerization, infrastructure automation, and CI/CD pipeline implementation for seamless hybrid operations."
  },
  {
    id: 5,
    title: "IoT Data Processing Hub",
    description: "Designed scalable IoT data ingestion system handling 1M+ device connections with edge computing",
    categories: ["IoT", "Edge Computing", "Scalability"],
    bgColor: "light-yellow",
    textColor: "black",
    technologies: ["Apache Kafka", "Node.js", "InfluxDB", "MQTT", "Edge AI"],
    timeline: "2020 - 2021",
    impact: "1000x scale improvement, 80% latency reduction",
    details: "Built distributed IoT platform with intelligent edge processing, predictive analytics, and automated device management for smart city infrastructure."
  },
  {
    id: 6,
    title: "Blockchain Integration Platform", 
    description: "Created enterprise blockchain solution for supply chain transparency and smart contract automation",
    categories: ["Blockchain", "Smart Contracts", "Supply Chain"],
    bgColor: "mid-orange",
    textColor: "black",
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS", "Go"],
    timeline: "2019 - 2020",
    impact: "100% supply chain traceability, automated compliance",
    details: "Developed end-to-end blockchain solution with smart contracts, decentralized storage, and integration APIs for seamless enterprise adoption."
  }
];

export const experience = [
  {
    company: "TechCorp Inc.",
    role: "Senior Systems Architect",
    period: "2022 - Present",
    location: "San Francisco, CA",
    achievements: [
      "Led architecture design for $10M+ cloud transformation initiative",
      "Reduced system complexity by 60% through microservices adoption", 
      "Mentored team of 15+ engineers across multiple domains"
    ]
  },
  {
    company: "CloudVision Solutions",
    role: "Solutions Architect", 
    period: "2019 - 2022",
    location: "Seattle, WA",
    achievements: [
      "Designed cloud-native architectures for 50+ enterprise clients",
      "Achieved 99.95% average uptime across all managed systems",
      "Pioneered DevOps practices reducing deployment time by 80%"
    ]
  },
  {
    company: "DataFlow Systems",
    role: "Software Architect",
    period: "2016 - 2019", 
    location: "Austin, TX",
    achievements: [
      "Built distributed data processing platform handling 100TB+ daily",
      "Implemented event-driven architecture improving system resilience",
      "Led technical due diligence for $50M acquisition"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at TechCorp Inc.",
    company: "TechCorp Inc.",
    content: "Allen's architectural vision transformed our entire technology stack. His ability to see the big picture while handling complex technical details is unmatched. The cloud migration he led saved us millions.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez", 
    role: "VP Engineering",
    company: "CloudVision Solutions",
    content: "Working with Allen was transformative. He doesn't just build systems - he crafts elegant solutions that scale beautifully. His microservices architecture reduced our operational complexity by 60%.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Head of Innovation", 
    company: "DataFlow Systems",
    content: "Allen's systems thinking is exceptional. He designed our analytics platform to handle massive scale while maintaining simplicity. Three years later, it's still our competitive advantage.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  }
];

export const services = [
  {
    title: "System Architecture Design",
    description: "End-to-end architecture planning for scalable, resilient systems",
    icon: "Building"
  },
  {
    title: "Cloud Strategy & Migration",
    description: "Strategic cloud adoption and seamless legacy system migration",
    icon: "Cloud"
  },
  {
    title: "Performance Optimization",
    description: "System performance analysis and optimization for maximum efficiency",
    icon: "Zap"
  },
  {
    title: "Technical Leadership",
    description: "Architecture guidance and technical mentoring for development teams",
    icon: "Users"
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