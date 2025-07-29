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
├── 📁 frontend/               # React Frontend Application
│   ├── 📁 public/            # Static assets
│   │   ├── index.html        # Main HTML file
│   │   ├── favicon.ico       # Website favicon
│   │   └── manifest.json     # Web app manifest
│   ├── 📁 src/               # Source code
│   │   ├── 📁 components/    # Reusable React components
│   │   │   ├── HeroSection.js
│   │   │   ├── ProjectCard.js
│   │   │   ├── SkillsSection.js
│   │   │   └── TestimonialsSection.js
│   │   ├── 📁 pages/         # Page components
│   │   │   ├── HomePage.js   # Landing page
│   │   │   ├── AboutPage.js  # About page
│   │   │   ├── ProjectsPage.js # Projects listing
│   │   │   ├── ProjectPage.js # Individual project
│   │   │   └── ContactPage.js # Contact page
│   │   ├── 📁 data/          # Static data and constants
│   │   │   └── mock.js       # Portfolio content data
│   │   ├── 📁 lib/           # Utility functions
│   │   ├── 📄 App.js         # Main App component
│   │   ├── 📄 App.css        # Global styles
│   │   └── 📄 index.js       # Entry point
│   ├── 📄 package.json       # Node.js dependencies
│   ├── 📄 tailwind.config.js # Tailwind CSS configuration
│   ├── 📄 .env               # Environment variables
│   └── 📄 yarn.lock          # Yarn lock file
├── 📁 backend/               # Backend (for future use)
├── 📄 README.md             # This installation guide
└── 📄 .gitignore            # Git ignore rules
```

## 🛠 Technology Stack

### Frontend
- **React 19.0.0** - Modern React with hooks and latest features
- **React Router 7.5.1** - Client-side routing for SPA navigation
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.9** - Smooth animations and transitions
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful, customizable icons
- **Embla Carousel** - Touch-friendly carousel component

### Development Tools
- **Yarn 1.22+** - Fast and reliable package manager
- **CRACO** - Create React App Configuration Override
- **ESLint** - JavaScript linting and code quality
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixes

### Build & Deployment
- **Create React App** - React development environment
- **Webpack** - Module bundler (via CRA)
- **Babel** - JavaScript transpiler (via CRA)

## 🔧 Development Workflow

### Development Commands
```bash
cd frontend

# Start development server with hot reload
yarn start

# Build for production
yarn build

# Run tests (if configured)
yarn test

# Check for linting issues
yarn lint

# Auto-fix linting issues
yarn lint:fix
```

### Code Structure
- **Components** - Reusable UI components in `/src/components/`
- **Pages** - Route-based page components in `/src/pages/`
- **Data** - Static content and configuration in `/src/data/mock.js`
- **Styles** - Tailwind classes and custom CSS in components

### Customizing Content

#### 1. Personal Information
Edit `/src/data/mock.js` to update:
- Personal details and bio
- Skills and expertise
- Project information
- Contact information

#### 2. Styling
- Use Tailwind CSS classes for styling
- Custom styles in component files
- Global styles in `App.css`

#### 3. Components
- Modify existing components in `/src/components/`
- Add new components as needed
- Update routing in `App.js`

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
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
yarn start --port 3001
```

#### 2. Node Modules Issues
```bash
cd frontend
rm -rf node_modules yarn.lock
yarn install
```

#### 3. Dependencies Issues
```bash
cd frontend
yarn install --check-files
# or
yarn install --force
```

#### 4. Build Errors
```bash
# Clear build cache
cd frontend
rm -rf build
yarn build

# Check for TypeScript errors if using TS
yarn build --verbose
```

#### 5. Styling Not Working
- Ensure Tailwind CSS is properly configured in `tailwind.config.js`
- Check if PostCSS is processing styles correctly
- Verify class names are not being purged in production

#### 6. Hot Reload Not Working
- Check if `WDS_SOCKET_PORT` is set in `.env`
- Restart development server
- Clear browser cache

### Getting Help

If you encounter issues:

1. **Check the browser console** for JavaScript errors
2. **Check terminal output** for build errors
3. **Clear caches:**
   ```bash
   # Clear browser cache and reload
   # Clear yarn cache
   cd frontend && yarn cache clean
   ```

4. **Verify dependencies:**
   ```bash
   cd frontend
   yarn list --depth=0
   ```

## 🚀 Deployment

### Static Hosting (Recommended for Portfolio)

#### Netlify
1. Build your project:
   ```bash
   cd frontend
   yarn build
   ```
2. Connect your GitHub repo to Netlify
3. Set build command: `cd frontend && yarn build`
4. Set publish directory: `frontend/build`

#### Vercel
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   cd frontend
   yarn build
   vercel --prod
   ```

#### GitHub Pages
1. Install gh-pages:
   ```bash
   cd frontend
   yarn add --dev gh-pages
   ```
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
3. Deploy:
   ```bash
   yarn deploy
   ```

### Custom Domain Setup
1. Build and deploy to your preferred platform
2. Configure DNS settings
3. Set up SSL certificate (usually automatic with modern hosting)

### Environment Variables for Production
Update `.env` for production if needed:
```env
# Frontend .env
GENERATE_SOURCEMAP=false
# Add any production-specific variables
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
