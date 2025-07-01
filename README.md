# 📊 Spreadsheet UI (React + Vite + Tailwind CSS)

A pixel-perfect spreadsheet-style interface built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, inspired by modern data grids and dashboard apps.

## ⚙️ Tech Stack

- ⚛️ React 18 (with TypeScript - strict mode)
- ⚡ Vite (fast dev server & bundler)
- 🎨 Tailwind CSS (utility-first styling)
- 🔢 Optional: react-table or custom table rendering
- 💾 No external state management (local state only)

---

## 🚀 Getting Started

### 1. Create Project with Vite + React + TypeScript

```bash
npm create vite@latest spreadsheet-ui -- --template react-ts
cd spreadsheet-ui
npm install

2. Install Tailwind CSS
Official setup from tailwindcss.com → using Vite:
npm install tailwindcss @tailwindcss/vite

vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({  plugins: [    tailwindcss(),  ],})

Setup Tailwind in src/index.css
@import "tailwindcss";

npm run dev