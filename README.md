# 💼 Finora — AI-Powered Financial Analytics SaaS Platform

A full-stack financial intelligence platform built with **TypeScript**, **React**, and the **MERN** stack. Finora empowers individuals and small business owners to track expenses, automate recurring financial entries, parse receipts with AI, and visualize deep fiscal analytics powered by MongoDB aggregation pipelines.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://finance-tracker-e1pe.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Aggregation_Pipeline-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

🌐 **Live Application:** [https://finance-tracker-e1pe.vercel.app](https://finance-tracker-e1pe.vercel.app)

---

## 🌟 Core Engineering Features

- 📊 **High-Performance MongoDB Aggregation**: Implements complex multi-stage aggregation pipelines (`$match`, `$group`, `$facet`, `$project`) to calculate monthly expenditure distributions, category breakdown pie metrics, and cash flow trend lines without client-side computational bottlenecks.
- 🧾 **AI-Powered Receipt Scanning**: Integrates computer vision / OCR prompt pipelines to extract merchant details, dates, line items, and transaction amounts from uploaded receipts.
- ⏰ **Automated Cron Jobs**: Background scheduler handling automated posting of recurring monthly subscriptions and triggering monthly fiscal summary email deliveries.
- 📥 **CSV Bulk Ingestion**: Multipart batch parser enabling users to import legacy bank statements and transaction logs seamlessly with validation.
- 💳 **Stripe Subscription Billing**: Webhook-verified Stripe subscription tiers with customer portal integration.
- 🔐 **Stateless Authentication**: JWT session security with role validation, password salting via bcrypt, and Cloudinary integration for user avatar hosting.

---

## 🏛️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│             Client SPA (React + TypeScript)            │
│  • Recharts & Lucide Icons    • Tailwind CSS UI        │
│  • CSV Parser & Uploader      • Date Range Filter Bar  │
└───────────────────────────┬────────────────────────────┘
                            │ HTTPS / REST (Axios)
                            ▼
┌────────────────────────────────────────────────────────┐
│          Backend Engine (Node.js + Express + TS)       │
│  • JWT Auth & Permissions Middleware                   │
│  • MongoDB Aggregation Controller Layer                │
│  • Background Cron Scheduler (`node-cron`)             │
└───────────────┬───────────────────┬────────────────────┘
                │                   │
    ┌───────────▼────────┐ ┌────────▼───────────┐ ┌─────────────────────┐
    │   MongoDB Atlas    │ │ AI Receipt Scanner │ │ Cloud Media/Billing │
    │ (Aggregate Indices │ │ (Vision Parsing)   │ │ (Cloudinary / Stripe│
    │  & Transactions)   │ └────────────────────┘ │  Webhooks)          │
    └────────────────────┘                        └─────────────────────┘
```

---

## 🛠️ Technology Stack

| Layer | Technologies | Details |
|---|---|---|
| **Frontend** | React 18, Vite, TypeScript | Type-safe UI architecture |
| **Styling & Charts** | Tailwind CSS, Recharts | Interactive SVG financial graphs |
| **Backend** | Node.js, Express.js, TypeScript | Clean MVC architecture with typed interfaces |
| **Database** | MongoDB Atlas, Mongoose | Indexed document models & aggregation pipelines |
| **Automation** | Node-Cron | Scheduled recurring transaction worker |
| **Media & Storage**| Cloudinary | Cloud receipt and avatar storage |
| **Authentication** | JWT, Bcrypt | Stateless token verification |
| **Deployment** | Vercel & Render | Continuous delivery with environment isolation |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas database cluster
- Cloudinary credentials
- (Optional) Stripe account for billing webhooks

### 1. Clone the Repository
```bash
git clone https://github.com/Rajan-vish/finance_tracker.git
cd finance_tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_token

# Cloudinary (Receipt & Media Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# AI Receipt OCR & Client
CLIENT_URL=http://localhost:5173
```

Run backend in development mode:
```bash
npm run dev
```

### 3. Frontend Setup
In a new terminal:
```bash
cd ../client
npm install
```

Create a `.env` file in `client/`:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

Navigate to `http://localhost:5173`.

---

## 📡 Key REST Endpoints

### Analytics & Transactions
- `GET /api/analytics/summary` — Aggregated income, expense, and net balance
- `GET /api/analytics/category-breakdown` — MongoDB aggregation pipeline output for charts
- `GET /api/transactions` — Paginated and date-filtered transaction records
- `POST /api/transactions` — Create manual transaction
- `POST /api/transactions/import-csv` — Bulk import validated CSV records
- `POST /api/transactions/scan-receipt` — AI OCR receipt processing endpoint
- `DELETE /api/transactions/bulk-delete` — Batch transaction deletion

---

## 👨‍💻 Author

**Rajan Kumar Vishwakarma**
- GitHub: [@Rajan-vish](https://github.com/Rajan-vish)
- Email: [rajanvish2005@gmail.com](mailto:rajanvish2005@gmail.com)
- LinkedIn: [linkedin.com/in/rajan-kumar-vishwakarma-1a4bb92a8](https://www.linkedin.com/in/rajan-kumar-vishwakarma-1a4bb92a8/)
- Codeforces: [rajan_pant (Specialist - 1420)](https://codeforces.com/profile/rajan_pant)
- LeetCode: [unbitten (614+ Solved)](https://leetcode.com/u/unbitten/)
