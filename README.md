# Portfolio Website - Installation Guide

A modern, static portfolio website built with React. Features a responsive design with Tailwind CSS, smooth animations with Framer Motion, and beautiful UI components. Perfect for showcasing your projects, skills, and professional experience.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repository-url>
cd portfolio-website

# Install dependencies and start
cd frontend
yarn install
yarn start
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js 18.0+** - [Download Node.js](https://nodejs.org/en/download/)
- **Yarn Package Manager** - [Install Yarn](https://yarnpkg.com/getting-started/install)
- **Git** - [Download Git](https://git-scm.com/downloads)

### Verify Installation
```bash
node --version     # Should show v18.0+  
yarn --version     # Should show 1.22+
git --version      # Should show Git 2.0+
```

## 🛠 Installation

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd portfolio-website
```

### 2. Frontend Setup (React)

#### 2.1. Navigate to Frontend Directory
```bash
cd frontend
```

#### 2.2. Install Dependencies
```bash
yarn install
```

#### 2.3. Configure Environment Variables (Optional)
```bash
# Create .env file in frontend directory if needed
touch .env
```

**Frontend .env file (optional for static version):**
```env
# For development
WDS_SOCKET_PORT=3000

# If you plan to add backend later
# REACT_APP_BACKEND_URL=http://localhost:8001
```

## 🚀 Running the Application

### Development Mode
```bash
cd frontend
yarn start
```

The application will open at http://localhost:3000

### Production Build
```bash
cd frontend
yarn build
```

The build folder will contain the static files ready for deployment.

## 🌐 Accessing the Application

After starting the development server:

- **Portfolio Website:** http://localhost:3000

## 📁 Project Structure

```
portfolio-website/
├── 📁 backend/                 # FastAPI Backend
│   ├── 📄 server.py           # Main FastAPI application
│   ├── 📄 requirements.txt    # Python dependencies
│   ├── 📄 .env               # Backend environment variables
│   └── 📁 __pycache__/       # Python cache files
├── 📁 frontend/               # React Frontend  
│   ├── 📁 public/            # Static assets
│   ├── 📁 src/               # Source code
│   │   ├── 📁 components/    # React components
│   │   ├── 📁 pages/         # Page components
│   │   ├── 📁 data/          # Mock data and constants
│   │   ├── 📄 App.js         # Main App component
│   │   └── 📄 index.js       # Entry point
│   ├── 📄 package.json       # Node.js dependencies
│   ├── 📄 tailwind.config.js # Tailwind CSS config
│   ├── 📄 .env              # Frontend environment variables
│   └── 📄 yarn.lock         # Yarn lock file
├── 📁 tests/                 # Test files
├── 📄 README.md             # This file
├── 📄 test_result.md        # Testing documentation
└── 📄 .gitignore            # Git ignore rules
```

## 🛠 Technology Stack

### Frontend
- **React 19.0.0** - Modern React with hooks
- **React Router 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.9** - Smooth animations
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **Axios 1.8.4** - HTTP client

### Backend
- **FastAPI 0.110.1** - Modern Python web framework
- **Python 3.11+** - Programming language
- **Motor 3.3.1** - Async MongoDB driver
- **PyMongo 4.5.0** - MongoDB driver
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Database
- **MongoDB** - NoSQL document database

### Development Tools
- **Yarn** - Package manager
- **CRACO** - Create React App Configuration Override
- **ESLint** - JavaScript linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🔧 Development Workflow

### Frontend Development
```bash
cd frontend
yarn start          # Start development server with hot reload
yarn build          # Build for production
yarn test           # Run tests
```

### Backend Development
```bash
cd backend
source venv/bin/activate  # Activate virtual environment
uvicorn server:app --reload  # Start with auto-reload
```

### Code Formatting & Linting
```bash
# Backend
cd backend
black .             # Format Python code
isort .             # Sort imports
flake8 .            # Check for style issues
mypy .              # Type checking

# Frontend  
cd frontend
yarn lint           # ESLint checking
yarn lint:fix       # Auto-fix linting issues
```

## 📱 Features

### Portfolio Sections
- **Hero Section** - Introduction with professional photo
- **About Page** - Professional story and expertise
- **Projects Showcase** - Portfolio projects with detailed views
- **Achievements** - Technical excellence and key metrics
- **Skills & Expertise** - Programming, IoT, and technical skills
- **Contact Form** - Get in touch functionality

### Technical Features
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Framer Motion integration
- **Fast Performance** - Optimized React components
- **SEO Friendly** - Meta tags and semantic HTML
- **Type Safety** - TypeScript-ready structure
- **Dark/Light Mode** - Theme switching capability

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process using port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process using port 8001 (backend)  
lsof -ti:8001 | xargs kill -9

# Kill process using port 27017 (MongoDB)
lsof -ti:27017 | xargs kill -9
```

#### 2. MongoDB Connection Issues
```bash
# Check if MongoDB is running
ps aux | grep mongod

# Start MongoDB manually
mongod --dbpath /path/to/your/data/directory

# Check MongoDB logs
tail -f /var/log/mongodb/mongod.log
```

#### 3. Node Modules Issues
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

#### 4. Python Dependencies Issues
```bash
cd backend
pip install --upgrade pip
pip install -r requirements.txt --force-reinstall
```

#### 5. CORS Issues
Ensure your backend .env has correct CORS settings:
```env
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

#### 6. Environment Variables Not Loading
- Verify .env files exist in both frontend and backend directories
- Check file names are exactly `.env` (not .env.txt)
- Restart servers after changing environment variables

### Getting Help

If you encounter issues:

1. **Check the logs:**
   ```bash
   # Backend logs
   tail -f /var/log/supervisor/backend.err.log
   
   # Frontend logs (check terminal output)
   # MongoDB logs
   tail -f /var/log/mongodb/mongod.log
   ```

2. **Verify all services are running:**
   ```bash
   # Check if all processes are running
   ps aux | grep -E "(node|python|mongod)"
   
   # Check ports
   netstat -tlnp | grep -E "(3000|8001|27017)"
   ```

3. **Clear caches:**
   ```bash
   # Clear browser cache
   # Clear Node modules cache
   cd frontend && yarn cache clean
   
   # Clear Python cache
   cd backend && find . -type d -name __pycache__ -delete
   ```

## 📚 API Documentation

Once the backend is running, visit http://localhost:8001/docs for interactive API documentation powered by FastAPI's automatic OpenAPI generation.

### Main API Endpoints
- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get status checks

## 🚀 Deployment

### Environment Setup for Production
1. Update environment variables for production
2. Build frontend: `cd frontend && yarn build`
3. Set up reverse proxy (nginx recommended)
4. Configure SSL certificates
5. Set up process manager (PM2 or supervisor)
6. Configure MongoDB for production

### Docker Deployment (Optional)
```bash
# Build Docker images
docker-compose build

# Run containers
docker-compose up -d
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with installation:

- Create an issue on GitHub
- Check existing issues for solutions
- Review troubleshooting section above

---

**Happy coding! 🎉**
