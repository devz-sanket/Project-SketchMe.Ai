# Use official Python image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Copy backend code
COPY backend/ /app

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port (adjust to match your FastAPI/Flask server)
EXPOSE 8000

# Start the server (adjust based on framework)
CMD ["python", "main.py"]
