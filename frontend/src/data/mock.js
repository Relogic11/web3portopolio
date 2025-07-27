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
  { category: "Frontend Development", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend Development", items: ["Node.js", "Python", "PHP", "Express.js", "FastAPI"] },
  { category: "Database & Storage", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Digital Ocean", "Docker", "GitHub Actions", "Nginx"] },
  { category: "Tools & Design", items: ["Figma", "Git", "VSCode", "Postman", "Slack"] }
];

export const projects = [
  {
    id: 1,
    title: "E-Learning Platform - EduTech",
    description: "Full-stack learning management system with video streaming, progress tracking, and payment integration",
    categories: ["Full Stack", "React", "Payment Integration"],
    bgColor: "light-pink",
    textColor: "black",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    timeline: "3 months",
    impact: "500+ active users, 95% completion rate",
    details: "Built a comprehensive e-learning platform for a Jakarta-based education startup. Features include course management, video streaming, student progress tracking, and integrated payment system.",
    clientType: "Startup",
    projectValue: "$8,000"
  },
  {
    id: 2,
    title: "Restaurant POS System",
    description: "Modern point-of-sale system with inventory management, sales analytics, and mobile-friendly design",
    categories: ["Web App", "POS", "Analytics"],
    bgColor: "mid-blue",
    textColor: "white", 
    technologies: ["Vue.js", "PHP", "MySQL", "Chart.js", "PWA"],
    timeline: "2 months",
    impact: "40% faster order processing, inventory optimization",
    details: "Developed a complete POS solution for a local restaurant chain. Includes order management, inventory tracking, sales reports, and works seamlessly on tablets and phones.",
    clientType: "Local Business",
    projectValue: "$5,500"
  },
  {
    id: 3,
    title: "Property Management Dashboard",
    description: "Comprehensive dashboard for property managers with tenant tracking, maintenance requests, and financial reports",
    categories: ["Dashboard", "Property Tech", "Reports"],
    bgColor: "dark-green", 
    textColor: "white",
    technologies: ["React", "FastAPI", "PostgreSQL", "PDF.js", "Docker"],
    timeline: "4 months",
    impact: "Manages 200+ properties, 60% time savings",
    details: "Created an all-in-one property management solution that handles tenant information, maintenance requests, rent collection tracking, and generates detailed financial reports.",
    clientType: "Property Agency",
    projectValue: "$12,000"
  },
  {
    id: 4,
    title: "Fitness App - GymBuddy",
    description: "Mobile-first fitness tracking app with workout plans, progress monitoring, and social features",
    categories: ["Mobile App", "Health Tech", "Social"],
    bgColor: "mid-purple",
    textColor: "white",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Firebase"],
    timeline: "5 months",
    impact: "1000+ downloads, 4.8 App Store rating",
    details: "Developed a comprehensive fitness application with custom workout plans, progress tracking, social features, and real-time messaging between trainers and clients.",
    clientType: "Health Startup",
    projectValue: "$15,000"
  },
  {
    id: 5,
    title: "E-Commerce Store - Fashion Hub",
    description: "Modern online store with product catalog, shopping cart, payment gateway, and admin panel",
    categories: ["E-Commerce", "Payment", "Admin Panel"],
    bgColor: "light-yellow",
    textColor: "black",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    timeline: "3 months",
    impact: "300% increase in online sales, mobile-optimized",
    details: "Built a complete e-commerce solution for a local fashion brand. Features include product management, inventory tracking, order processing, and integrated payment system.",
    clientType: "Fashion Brand",
    projectValue: "$10,000"
  },
  {
    id: 6,
    title: "Company Website Redesign", 
    description: "Complete website redesign with modern UI, CMS integration, and SEO optimization for better visibility",
    categories: ["Web Design", "CMS", "SEO"],
    bgColor: "mid-orange",
    textColor: "black",
    technologies: ["WordPress", "Custom PHP", "MySQL", "SEO Tools", "Analytics"],
    timeline: "6 weeks",
    impact: "200% increase in organic traffic, modern design",
    details: "Redesigned and rebuilt company website with focus on user experience, search engine optimization, and easy content management for non-technical staff.",
    clientType: "Consulting Firm",
    projectValue: "$4,500"
  }
];

export const experience = [
  {
    company: "Freelance Developer",
    role: "Full Stack Developer & Systems Architect",
    period: "2022 - Present",
    location: "Jakarta, Indonesia",
    achievements: [
      "Delivered 25+ successful projects for clients across various industries", 
      "Maintained 98% client satisfaction rate with consistent 5-star reviews",
      "Generated $150K+ in revenue through freelance development work"
    ]
  },
  {
    company: "TechStart Solutions",
    role: "Senior Developer", 
    period: "2020 - 2022",
    location: "Jakarta, Indonesia",
    achievements: [
      "Led development of 10+ client projects from concept to deployment",
      "Reduced average project delivery time by 30% through process optimization",
      "Mentored 3 junior developers and established coding best practices"
    ]
  },
  {
    company: "Digital Agency Indo",
    role: "Web Developer",
    period: "2019 - 2020", 
    location: "Jakarta, Indonesia",
    achievements: [
      "Built responsive websites and web applications for 20+ clients",
      "Improved website performance by average of 60% through optimization",
      "Collaborated with design team to deliver pixel-perfect implementations"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Founder",
    company: "EduTech Indonesia",
    content: "Allen transformed our vision into reality! His e-learning platform exceeded our expectations. The attention to detail and smooth user experience helped us acquire 500+ students in just 3 months. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Budi Santoso", 
    role: "Restaurant Owner",
    company: "Warung Nasi Budi",
    content: "The POS system Allen built for my restaurant is amazing! Order processing is 40% faster now, and I can track everything from my phone. My staff loves how easy it is to use. Worth every rupiah!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Lisa Putri",
    role: "Property Manager", 
    company: "Jakarta Property Solutions",
    content: "Allen's property management dashboard saved our business! We can now manage 200+ properties efficiently. The automated reports and maintenance tracking features are game-changers. Professional work!",
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