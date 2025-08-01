// Missing technologies from projects that should be in About page

const projectTechnologies = [
  // All unique techs from projects
  "AWS", "Anchor Framework", "Apache Kafka", "Bootstrap", "C++", "CUDA", "Chart.js",
  "ClickHouse", "D3.js", "Dart", "Docker", "Edge AI", "FastAPI", "Firebase", "Flutter",
  "Fortran", "Go", "Google Fit API", "Grafana", "HDF5", "Hugging Face", "IPFS",
  "InfluxDB", "Kafka", "Kubernetes", "Laravel", "Laravel API", "LoRaWAN", "MPI",
  "MQTT", "Midtrans", "MongoDB", "MySQL", "Next.js", "Node.js", "NumPy", "OpenAI GPT",
  "OpenCL", "OpenCV", "Payment Gateway", "Polygon", "Post-Quantum Crypto", "PostgreSQL",
  "Push Notifications", "PyTorch", "Python", "Qt", "React", "React Native",
  "Real-time DSP", "Redis", "Rust", "SEO Tools", "SQLite", "SciPy", "Socket.io",
  "Solana", "Solidity", "Stripe", "Supabase", "System APIs", "Tailwind", "Tauri",
  "TensorFlow", "TensorRT", "Three.js", "TypeScript", "Verilog", "Vue.js",
  "Web3.js", "Web3.py", "WebGL", "WebRTC", "WebSocket", "YOLO", "Zero-Knowledge",
  "jQuery", "libsodium"
];

const currentSkills = [
  // From skills.js
  "Python", "JavaScript", "TypeScript", "Rust", "Go", "PHP", "Java", "C++", "Solidity",
  "React", "Next.js", "Vue.js", "Angular", "Svelte", "Tailwind CSS", "Bootstrap", "Material-UI",
  "Node.js", "Express.js", "FastAPI", "Django", "Flask", "Laravel", "Spring Boot", "Actix Web",
  "Solana", "Ethereum", "Polygon", "Binance Smart Chain", "Web3.js", "ethers.js", "Anchor Framework",
  "TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "Computer Vision", "NLP", "LangChain", "Ollama",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase", "Supabase", "Prisma",
  "React Native", "Flutter", "Expo", "Ionic", "PWA", "Tauri", "Capacitor",
  "Arduino", "Raspberry Pi", "ESP32", "LoRaWAN", "MQTT", "Edge Computing", "Sensor Networks",
  "AWS", "Google Cloud", "Vercel", "DigitalOcean", "Docker", "Kubernetes", "GitHub Actions", "Terraform"
];

const missingSkills = projectTechnologies.filter(tech => !currentSkills.includes(tech));

console.log("=== MISSING ADVANCED TECHNOLOGIES ===");
missingSkills.forEach((tech, index) => {
  console.log(`${index + 1}. ${tech}`);
});

console.log(`\nTotal missing: ${missingSkills.length} cool technologies!`);

// Group by category untuk easier organization
const categories = {
  "Advanced AI/ML": ["CUDA", "TensorRT", "YOLO", "OpenCV", "NumPy", "SciPy", "Real-time DSP"],
  "Hardware/Systems": ["Verilog", "OpenCL", "Fortran", "HDF5", "MPI", "libsodium", "Qt"],
  "Web Technologies": ["WebGL", "WebRTC", "WebSocket", "Three.js", "Socket.io", "Chart.js", "D3.js"],
  "Databases/Analytics": ["InfluxDB", "Grafana", "ClickHouse", "Apache Kafka", "Kafka"],
  "Payment/Business": ["Stripe", "Midtrans", "Payment Gateway"],
  "Blockchain Advanced": ["IPFS", "Zero-Knowledge", "Post-Quantum Crypto", "Web3.py"],
  "DevOps/Tools": ["SEO Tools", "System APIs", "Push Notifications", "Google Fit API", "Laravel API"],
  "Mobile/Cross-platform": ["Dart", "SQLite", "Tailwind"],
  "Others": ["jQuery", "Edge AI"]
};

console.log("\n=== GROUPED BY CATEGORY ===");
Object.entries(categories).forEach(([category, techs]) => {
  console.log(`\n${category}:`);
  techs.forEach(tech => {
    if (missingSkills.includes(tech)) {
      console.log(`  ✅ ${tech}`);
    }
  });
});
