# Static Portfolio Website Makefile
# Makes development and deployment easier

.PHONY: help install start build deploy clean dev health

# Default target
help:
	@echo "Static Portfolio Website - Development Commands"
	@echo "=============================================="
	@echo "make install         - Install dependencies"
	@echo "make start          - Start development server"
	@echo "make build          - Build for production"
	@echo "make deploy         - Deploy to GitHub Pages"
	@echo "make clean          - Clean caches and temp files"
	@echo "make dev            - Full development setup"
	@echo "make health         - Check if dev server is running"

# Install dependencies
install:
	@echo "📦 Installing dependencies..."
	cd frontend && yarn install
	@echo "✅ Dependencies installed successfully!"

# Start development server
start:
	@echo "🚀 Starting development server..."
	cd frontend && yarn start

# Build for production
build:
	@echo "🏗️  Building for production..."
	cd frontend && yarn build
	@echo "✅ Production build completed!"
	@echo "📁 Build files are in frontend/build/"

# Deploy to GitHub Pages (requires gh-pages setup)
deploy: build
	@echo "🚀 Deploying to GitHub Pages..."
	cd frontend && yarn deploy
	@echo "✅ Deployed successfully!"

# Clean caches and temporary files
clean:
	@echo "🧹 Cleaning caches and temporary files..."
	# Clean Node cache and build files
	cd frontend && yarn cache clean
	cd frontend && rm -rf build node_modules/.cache
	@echo "✅ Cleanup completed!"

# Full development setup (first time)
dev: install
	@echo "🛠️  Setting up development environment..."
	@echo "✅ Development environment ready!"
	@echo "Run 'make start' to begin development"

# Check if development server is running
health:
	@echo "🔍 Health Check:"
	@echo -n "Development Server: "
	@curl -s http://localhost:3000 >/dev/null 2>&1 && echo "✅ Online" || echo "❌ Offline"

# Quick development restart
restart:
	@echo "🔄 Use Ctrl+C to stop current server, then run 'make start'"

# Test the build
test-build: build
	@echo "🧪 Testing production build..."
	cd frontend/build && python3 -m http.server 8000 &
	@echo "✅ Test server running at http://localhost:8000"
	@echo "Press Ctrl+C to stop"

# Install deployment dependencies
setup-deploy:
	@echo "🔧 Setting up deployment tools..."
	cd frontend && yarn add --dev gh-pages
	@echo "✅ Deployment tools installed!"
	@echo "ℹ️  Add homepage and deploy scripts to package.json"

# Check project status
status:
	@echo "📊 Project Status:"
	@echo "Node.js version: $$(node --version)"
	@echo "Yarn version: $$(yarn --version)"
	@echo "Frontend dependencies: $$(cd frontend && yarn list --depth=0 2>/dev/null | wc -l) packages"
	@echo "Build status: $$(test -d frontend/build && echo "✅ Built" || echo "❌ Not built")"