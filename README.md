# resume-agent-ollama

> **WORK IN PROGRESS**: This project is currently under active development. The backend and frontend resume analysis functionality are implemented, but further improvements are ongoing.

A smart resume analysis tool that helps job seekers evaluate their resumes against job postings. This application uses LangChain and Ollama to provide intelligent resume analysis and job fit recommendations.

## Current Status

- Backend implementation with LangChain and Ollama
- Resume skill extraction
- Job posting analysis
- Comparison logic
- Frontend interface
- Web server setup 

## Features

- Resume skill extraction and analysis
- Job posting requirement analysis
- Automated comparison between resume and job requirements
- Detailed feedback and suggestions for improvement
- Web-based interface for easy interaction
- PDF upload and parsing
- Powered by local LLM through Ollama for privacy and speed

## Tech Stack

- **Backend**: Node.js
- **Frontend**: HTML, CSS, JavaScript (see `public/`)
- **AI/ML**: 
  - Ollama (Local LLM)
  - LangChain (AI/LLM Framework)
- **Architecture**: Chain-based workflow for modular analysis

## Prerequisites

- Node.js installed on your system
- Ollama installed and running locally
- A modern web browser

## Setup


1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Make sure Ollama is running on your system (default port: 11434)

4. Start the server:
```bash
node server.js
```

5. Open your browser and navigate to `http://localhost:3001`

## How It Works

The application processes resumes and job postings through a sophisticated chain of AI analysis:
1. Extracts key skills and experience from the resume (PDF or text)
2. Analyzes job posting requirements
3. Compares the extracted information
4. Provides tailored recommendations and feedback

## Usage

- Upload your resume as a PDF and paste the job description in the provided form.
- The app will analyze your resume and display a summary, extracted skills, and a comparison with the job requirements.
