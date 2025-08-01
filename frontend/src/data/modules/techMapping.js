// Technology name mapping for SVG icons
// Maps skill names from mock.js to actual SVG filenames

export const techIconMapping = {
  // Programming Languages
  "Python": "Python",
  "JavaScript": "JavaScript", 
  "TypeScript": "TypeScript",
  "Rust": "Rust",
  "Go": "Go",
  "PHP": "PHP",
  "Java": "Java",
  "C++": "C++-(CPlusPlus)",
  "Solidity": "Solidity",
  
  // Frontend Frameworks
  "React": "React",
  "Next.js": "Next.js",
  "Vue.js": "Vue.js",
  "Angular": "Angular",
  "Svelte": "Svelte",
  "Tailwind CSS": "Tailwind-CSS",
  "Bootstrap": "Bootstrap",
  "Material-UI": "Material-UI",
  "GraphQL": "GraphQL", // Available! (New)
  
  // Backend Frameworks
  "Node.js": "Node.js",
  "Express.js": "Express",
  "FastAPI": "FastAPI",
  "Django": "Django",
  "Flask": "Flask",
  "Laravel": "Laravel",
  "Spring Boot": "Spring",
  "Actix Web": "Actix--Streamline-Simple-Icons", // Correct filename!
  "Bun": "Bun", // Available! (New)
  
  // Blockchain & Web3
  "Solana": "solana-sol-icon", // Try the alternative Solana icon
  "Ethereum": "Ethereum--Streamline-Svg-Logos", // Correct filename!
  "Polygon": "Polygon", // Using Polygon.svg (correct!)
  "Binance Smart Chain": "Binance",
  "Web3.js": "web3js-seeklogo", // Correct filename!
  "ethers.js": "ethers-seeklogo", // Available! (Updated to seeklogo version)
  "Anchor Framework": "Anchor", // Using Anchor.svg
  "IPFS": "ipfs", // Available! (New)
  
  // AI & Machine Learning
  "TensorFlow": "TensorFlow",
  "PyTorch": "PyTorch",
  "OpenAI GPT": "Openai--Streamline-Svg-Logos", // Correct filename!
  "Hugging Face": "Hugging-Face",
  "Computer Vision": "OpenCV",
  "NLP": "Python", // Fallback
  "LangChain": "LangChain",
  "Ollama": "Ollama", // Need to check if exists
  "Keras": "Keras", // Available! (New)
  "Scikit-learn": "scikit-learn", // Fallback - no icon available
  "Pandas": "Pandas", // Available! (New)
  "Matplotlib": "Matplotlib", // Available! (New)
  "Kaggle": "Kaggle", // Available! (New)
  
  // Databases
  "PostgreSQL": "PostgresSQL",
  "MySQL": "MySQL", 
  "MongoDB": "MongoDB",
  "Redis": "Redis",
  "Elasticsearch": "Elastic-Search",
  "Firebase": "Firebase",
  "Supabase": "Supabase--Streamline-Svg-Logos", // Correct filename!
  "Prisma": "Prisma", // Using Prisma.svg (correct!)
  "ClickHouse": "clickhouse", // Available! (New)
  
  // Mobile Development
  "React Native": "React",
  "Flutter": "Flutter",
  "Expo": "React", // No Expo icon, fallback to React
  "Ionic": "Ionic",
  "PWA": "Pwa--Streamline-Svg-Logos", // Correct filename!
  "Tauri": "Tauri", // Using Tauri.svg (correct!)
  "Capacitor": "Capacitor", // Using Capacitor.svg (correct!)
  
  // IoT & Hardware  
  "Arduino": "Arduino",
  "Raspberry Pi": "Raspberry-Pi",
  "ESP32": "Arduino", // Fallback
  "LoRaWAN": "Arduino", // Fallback - no specific icon
  "MQTT": "Arduino", // Fallback - no specific icon
  "InfluxDB": "InfluxDB", // Available!
  "Grafana": "Grafana", // Available!
  "Edge AI": "TensorFlow", // Fallback to TensorFlow
  
  // More Technologies
  "Socket.io": "Socket.io", // Available!
  "Apache Kafka": "Apache-Kafka", // Available!
  "Kafka": "Apache-Kafka", // Available!
  "Chart.js": "Chartjs--Streamline-Svg-Logos", // Available! (Updated)
  "TensorRT": "tensorrt-logo", // Available! (Updated)
  "YOLO": "yolo", // Available! (Updated)
  "WebSocket": "websocket-svgrepo-com", // Available! (Updated)
  "WebRTC": "HTML5", // Fallback - web technology
  "WebGL": "webgl-svgrepo-com", // Available! (Updated)
  "Three.js": "Three.js", // Available! (Updated)
  "Qt": "Qt-Framework", // Available! (Updated)
  "NumPy": "NumPy", // Available! (Updated)
  "SciPy": "Python", // Fallback
  "OpenCV": "OpenCV", // Available!
  "Midtrans": "midtrans", // Available! (Updated)
  "Payment Gateway": "Stripe--Streamline-Svg-Logos", // Available! (Updated)
  "Push Notifications": "Firebase", // Fallback
  "Laravel API": "Laravel", // Use Laravel icon
  "System APIs": "Python", // Fallback
  "Google Fit API": "Android", // Fallback to Android
  "ClickHouse": "PostgresSQL", // Fallback to database icon
  "HDF5": "Python", // Fallback - scientific computing
  "MPI": "Python", // Fallback - scientific computing
  "Fortran": "Fortran", // Available! (Updated)
  "OpenCL": "OpenCL", // Available! (Updated)
  "Verilog": "verilog-svgrepo-com", // Available! (Updated)
  "CUDA": "cuda-svgrepo-com", // Available! (Updated)
  "libsodium": "C++-(CPlusPlus)", // Fallback to C++
  "Post-Quantum Crypto": "C++-(CPlusPlus)", // Fallback
  "Zero-Knowledge": "Solidity", // Fallback to blockchain
  "Real-time DSP": "dsp-surveillance-symbol-svgrepo-com", // Available! (Updated)
  "SEO Tools": "HTML5", // Fallback
  "Web3.py": "Python", // Fallback to Python
  "Dart": "Dart", // Available!
  "Tailwind": "Tailwind-CSS", // Available!
  "SQLite": "SQLite", // Available!
  "Stripe": "Stripe--Streamline-Svg-Logos", // Available! (Updated)
  "jQuery": "jQuery", // Available!
  
  // Cloud & DevOps
  "AWS": "AWS",
  "Google Cloud": "Google-Cloud",
  "Vercel": "Vercel",
  "DigitalOcean": "Digital-Ocean",
  "Docker": "Docker",
  "Kubernetes": "Kubernetes",
  "GitHub Actions": "GitHub-Actions",
  "Terraform": "HashiCorp-Terraform",
  "Heroku": "Heroku", // Available! (New)
  "Postman": "Postman", // Available! (New)
  "Prometheus": "Prometheus", // Available! (New)
  "Yarn": "Yarn", // Available! (New)
  
  // E-commerce & Business
  "WooCommerce": "WooCommerce", // Available! (New)
};

/**
 * Get the SVG filename for a technology name
 * @param {string} techName - Technology name from skills
 * @returns {string} - SVG filename (without .svg extension)
 */
export const getTechIconName = (techName) => {
  return techIconMapping[techName] || techName.replace(/\s+/g, '-');
};
