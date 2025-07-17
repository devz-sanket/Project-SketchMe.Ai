## SketchMe.ai - Image Transformation Web App

SketchMe.ai is a web application that lets users transform their images into sketches, paintings (AnimeGAN), or enhanced versions using AI and image processing.

Features

- Image to Pencil Sketch
- Human to Painting (AnimeGAN2)
- Image Enhancement
- Drag & Drop file upload
- FastAPI backend
- React + Vite frontend


## ⚙️1 Backend Setup (Python + FastAPI)

### 1. Create and activate virtual environment

blash: python -m venv venv
# Activate:

# On Windows
venv\Scripts\activate

# On Linux/macOS
source venv/bin/activate

## 2. Install dependencies

pip install -r requirements.txt

## 3. Run the backend server

uvicorn main:app --reload

## Frontend Setup (React + Vite)

## Navigate to frontend folder

cd frontend

## 2. Install dependencies

npm install

## 3. Set environment variable
Create a .env file in /frontend:

VITE_API_URL=http://127.0.0.1:8000

## 4. Run the frontend app

npm run dev
