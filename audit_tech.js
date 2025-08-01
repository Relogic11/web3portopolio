// Audit technologies yang ada di projects vs yang ada mapping di techMapping.js

const allProjectTechs = [
  // From all projects data
  "Python", "TensorFlow", "Web3.py", "Redis", "WebSocket", "AWS",
  "LoRaWAN", "MQTT", "InfluxDB", "Grafana", "Edge AI",
  "Solidity", "Zero-Knowledge", "IPFS", "Polygon", "React", "Node.js",
  "PyTorch", "OpenCV", "YOLO", "TensorRT",
  "Three.js", "WebRTC", "WebGL", "Socket.io",
  "Go", "Post-Quantum Crypto", "libsodium", "React Native",
  "CUDA", "Verilog", "C++", "OpenCL",
  "MPI", "Fortran", "Kubernetes", "HDF5",
  "NumPy", "SciPy", "Real-time DSP", "Qt",
  "Laravel", "MySQL", "Vue.js", "Midtrans", "Bootstrap", "jQuery",
  "Payment Gateway", "Chart.js", "Push Notifications",
  "SEO Tools",
  "Laravel API",
  "Rust", "Anchor Framework", "Solana", "TypeScript", "Web3.js",
  "Next.js", "OpenAI GPT", "PostgreSQL", "Tailwind",
  "Tauri", "SQLite", "System APIs",
  "FastAPI", "Hugging Face", "Docker",
  "Kafka", "MongoDB",
  "Flutter", "Dart", "Firebase", "Google Fit API", "Supabase", "Stripe",
  "ClickHouse", "Apache Kafka", "D3.js"
];

// Remove duplicates and sort
const uniqueTechs = [...new Set(allProjectTechs)].sort();

console.log("=== ALL TECHNOLOGIES IN PROJECTS ===");
uniqueTechs.forEach((tech, index) => {
  console.log(`${index + 1}. ${tech}`);
});

console.log(`\nTotal: ${uniqueTechs.length} unique technologies`);

// Now check which ones need SVG mapping
const problematicTechs = [
  "Web3.py", "LoRaWAN", "MQTT", "InfluxDB", "Grafana", "Edge AI",
  "Zero-Knowledge", "IPFS", "YOLO", "TensorRT", 
  "WebRTC", "WebGL", "Socket.io", "Post-Quantum Crypto", "libsodium",
  "Verilog", "OpenCL", "MPI", "Fortran", "HDF5",
  "Real-time DSP", "Midtrans", "Payment Gateway", "Chart.js", 
  "Push Notifications", "SEO Tools", "Laravel API", "Anchor Framework",
  "OpenAI GPT", "System APIs", "Hugging Face", "Google Fit API",
  "ClickHouse", "Apache Kafka"
];

console.log("\n=== TECHNOLOGIES THAT LIKELY NEED MAPPING/ICONS ===");
problematicTechs.forEach((tech, index) => {
  console.log(`${index + 1}. ${tech}`);
});
