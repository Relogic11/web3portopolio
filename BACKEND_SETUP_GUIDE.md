# 🚀 Backend Setup Guide for Termux

## Option 1: FastAPI Backend di Termux (Recommended)

### Setup Termux:
```bash
# Update packages
pkg update && pkg upgrade

# Install Python dan dependencies
pkg install python
pip install fastapi uvicorn python-multipart

# Install email dependencies
pip install smtplib email-validator
```

### Create FastAPI Backend:
```bash
# Buat folder backend
mkdir ~/portfolio-backend
cd ~/portfolio-backend

# Buat file main.py
```

### Backend Code (main.py):
```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = FastAPI(title="Portfolio Contact API")

# Enable CORS for your GitHub Pages domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://relogic11.github.io",
        "http://localhost:3000",  # For local development
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

@app.get("/")
async def root():
    return {"message": "Portfolio Contact API is running!"}

@app.post("/api/contact")
async def send_contact_message(contact: ContactMessage):
    try:
        # Email configuration (use Gmail SMTP)
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = "your-email@gmail.com"  # Ganti dengan email kamu
        sender_password = "your-app-password"   # Ganti dengan App Password Gmail
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = sender_email  # Send to yourself
        msg['Subject'] = f"Portfolio Contact: {contact.subject}"
        
        # Email body
        body = f"""
        New contact message from portfolio website:
        
        Name: {contact.name}
        Email: {contact.email}
        Subject: {contact.subject}
        
        Message:
        {contact.message}
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, sender_email, text)
        server.quit()
        
        return {"status": "success", "message": "Message sent successfully!"}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Run Backend:
```bash
# Jalankan server
python main.py

# Server akan jalan di: http://localhost:8000
# API endpoint: http://localhost:8000/api/contact
```

---

## Option 2: Backend Alternatif (Lebih Mudah)

### 1. **Netlify Forms** (Gratis):
```html
<!-- Ubah form di ContactPage.js jadi: -->
<form netlify>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>
```

### 2. **Formspree** (Gratis):
```javascript
// Di ContactPage.js, ubah action form:
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### 3. **EmailJS** (Gratis):
```bash
npm install emailjs-com
```

---

## 🔧 Setup Email untuk Backend Termux:

### Gmail App Password:
1. Buka Gmail Settings → Security
2. Enable 2-Step Verification
3. Generate App Password
4. Use App Password di backend code

### Jalankan di Background:
```bash
# Install screen untuk background process
pkg install screen

# Jalankan dalam screen session
screen -S portfolio-backend
python main.py

# Detach: Ctrl+A, D
# Reattach: screen -r portfolio-backend
```

---

## 🌐 Expose Termux ke Internet:

### Option 1 - Ngrok (Recommended):
```bash
# Install ngrok di Termux
pkg install nodejs-lts
npm install -g ngrok

# Expose port 8000
ngrok http 8000

# Kamu akan dapat URL: https://abc123.ngrok.io
```

### Option 2 - Cloudflare Tunnel:
```bash
# Download cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64
chmod +x cloudflared-linux-arm64

# Create tunnel
./cloudflared-linux-arm64 tunnel --url http://localhost:8000
```

---

## 📱 Update Frontend untuk Connect ke Backend:

Nanti kita update ContactPage.js untuk connect ke backend endpoint yang kamu pilih!

**Mau pakai yang mana?** 
- FastAPI di Termux dengan ngrok? 
- Atau yang lebih simple pakai Netlify Forms/Formspree?
