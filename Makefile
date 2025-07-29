# Portfolio Website Makefile
# Makes installation and development easier

.PHONY: help install install-backend install-frontend start start-backend start-frontend stop restart clean test

# Default target
help:
	@echo "Portfolio Website - Development Commands"
	@echo "======================================="
	@echo "make install         - Install all dependencies"
	@echo "make start          - Start all services"
	@echo "make stop           - Stop all services"
	@echo "make restart        - Restart all services"
	@echo "make clean          - Clean caches and temp files"
	@echo "make test           - Run tests"
	@echo "make install-backend - Install only backend dependencies"
	@echo "make install-frontend - Install only frontend dependencies"
	@echo "make start-backend   - Start only backend service"
	@echo "make start-frontend  - Start only frontend service"

# Install all dependencies
install: install-backend install-frontend
	@echo "✅ All dependencies installed successfully!"

# Install backend dependencies
install-backend:
	@echo "📦 Installing backend dependencies..."
	cd backend && pip install -r requirements.txt

# Install frontend dependencies  
install-frontend:
	@echo "📦 Installing frontend dependencies..."
	cd frontend && yarn install

# Start all services
start:
	@echo "🚀 Starting all services..."
	sudo supervisorctl restart all
	@echo "✅ Services started!"
	@echo "Frontend: http://localhost:3000"
	@echo "Backend API: http://localhost:8001"
	@echo "API Docs: http://localhost:8001/docs"

# Start only backend
start-backend:
	@echo "🚀 Starting backend service..."
	sudo supervisorctl restart backend

# Start only frontend
start-frontend:  
	@echo "🚀 Starting frontend service..."
	sudo supervisorctl restart frontend

# Stop all services
stop:
	@echo "⏹️  Stopping all services..."
	sudo supervisorctl stop all

# Restart all services
restart:
	@echo "🔄 Restarting all services..."
	sudo supervisorctl restart all
	@echo "✅ Services restarted!"

# Clean caches and temporary files
clean:
	@echo "🧹 Cleaning caches and temporary files..."
	# Clean Python cache
	find backend -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	find backend -name "*.pyc" -delete 2>/dev/null || true
	# Clean Node cache
	cd frontend && yarn cache clean
	@echo "✅ Cleanup completed!"

# Run tests
test:
	@echo "🧪 Running tests..."
	# Backend tests
	cd backend && python -m pytest
	# Frontend tests  
	cd frontend && yarn test --watchAll=false
	@echo "✅ Tests completed!"

# Check status of all services
status:
	@echo "📊 Service Status:"
	sudo supervisorctl status

# View logs
logs:
	@echo "📋 Recent logs:"
	@echo "Backend logs:"
	tail -n 20 /var/log/supervisor/backend.*.log
	@echo "\nFrontend logs:"
	sudo supervisorctl tail frontend

# Development setup (first time setup)
dev-setup: install
	@echo "🛠️  Setting up development environment..."
	# Create necessary directories if they don't exist
	mkdir -p logs
	# Set up git hooks if needed
	@echo "✅ Development environment ready!"
	@echo "Run 'make start' to begin development"

# Production build
build:
	@echo "🏗️  Building for production..."
	cd frontend && yarn build
	@echo "✅ Production build completed!"

# Quick health check
health:
	@echo "🔍 Health Check:"
	@echo -n "Backend API: "
	@curl -s http://localhost:8001/api/ >/dev/null 2>&1 && echo "✅ Online" || echo "❌ Offline"
	@echo -n "Frontend: "
	@curl -s http://localhost:3000 >/dev/null 2>&1 && echo "✅ Online" || echo "❌ Offline"
	@echo -n "MongoDB: "
	@mongosh --quiet --eval "db.adminCommand('ismaster')" >/dev/null 2>&1 && echo "✅ Online" || echo "❌ Offline"