<div align="center">

# 🚀 TypeScript FullStack Boilerplate

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)

</div>

A structured full-stack web application boilerplate built with TypeScript. It features a decoupled architecture with React and Vite on the frontend, Node.js and Express on the backend, and Nginx acting as a reverse proxy. Fully dockerized, structured, and production-ready.

## 🚀 Initial Setup

### 1. Configure Environment Variables

**Frontend:**
```bash
cp Frontend/.env.example Frontend/.env
```

**Backend:**
```bash
cp Backend/.env.example Backend/.env
```

---

## 🐳 Running the Containers

```bash
cd Infrastructure
docker compose up --build -d
```

---

## 🌐 Service Endpoints

| Service | URL | Purpose |
|---------|-----|---------|
| 🎨 Frontend (Dev) | http://localhost:5173 | Development server with HMR |
| 🎨 Frontend (Prod) | http://localhost:85 | Production build served by Nginx |
| 🔌 API Backend | http://localhost:85/api | API Endpoints |