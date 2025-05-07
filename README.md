# resume-agent-ollama

> **WORK IN PROGRESS**: This project is currently under active development. The backend resume analysis functionality is being implemented, but the frontend interface is not yet available.

A smart resume analysis tool that helps job seekers evaluate their resumes against job postings. This application uses LangChain and Ollama to provide intelligent resume analysis and job fit recommendations.

## Current Status

- Backend implementation with LangChain and Ollama
- Resume skill extraction
- Job posting analysis
- Comparison logic
- Frontend interface (Not implemented yet)
- Web server setup (In progress)

## Features

- Resume skill extraction and analysis
- Job posting requirement analysis
- Automated comparison between resume and job requirements
- Detailed feedback and suggestions for improvement
- Web-based interface for easy interaction
- Powered by local LLM through Ollama for privacy and speed

## Tech Stack

- **Backend**: Node.js
- **AI/ML**: 
  - Ollama (Local LLM)
  - LangChain (AI/LLM Framework)
- **Architecture**: Chain-based workflow for modular analysis
- **Frontend**: To be implemented

## Prerequisites

- Node.js installed on your system
- Ollama installed and running locally
- A modern web browser

## Setup

> Note: Currently only the backend functionality can be tested through direct Node.js execution.

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-agent-ollama.git
cd resume-agent-ollama
```

2. Install dependencies:
```bash
npm install
```

3. Make sure Ollama is running on your system (default port: 11434)

4. Run the analysis (temporary until frontend is implemented):
```bash
node index.js
```



## How It Works

The application processes resumes and job postings through a sophisticated chain of AI analysis:
1. Extracts key skills and experience from the resume
2. Analyzes job posting requirements
3. Compares the extracted information
4. Provides tailored recommendations and feedback
