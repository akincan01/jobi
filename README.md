# 🧠 Jobi – Setup Guide

**Jobi** is a Django + React web app that allows users to create a profile and interact with a job-related interface (currently under development).  
This guide will help you set up the project locally using:

- Django (Python backend)
- React (JavaScript frontend)
- PostgreSQL (for production-ready database)

---

## 🛠️ Requirements

Make sure you have the following installed on your computer:

- [Python 3.11+](https://www.python.org/)
- [Node.js + npm](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (via [Homebrew](https://brew.sh/) on macOS is easiest)
- Git

---

## 🧭 Project Structure

```
jobi/
├── backend/           # Django backend (API, database)
│   ├── jobi/          # Django project settings
│   ├── accounts/      # Django app for user accounts
│   └── .env           # Local DB credentials (ignored in Git)
├── frontend/          # React frontend (UI)
├── requirements.txt   # Python dependencies
└── README.md          # This file
```

---

## ⚙️ 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/jobi.git
cd jobi
```

---

## 🐍 2. Setup Python Virtual Environment

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r ../requirements.txt
```

---

## 🐘 3. Setup PostgreSQL

Make sure PostgreSQL is running:

```bash
brew services start postgresql
```

Create a PostgreSQL user and database:

```bash
createuser -P jobi_user
createdb -O jobi_user jobi_db
```

---

## 🔐 4. Create `.env` File

Inside the `backend/` folder, create a `.env` file:

```ini
# backend/.env
DB_NAME=jobi_db
DB_USER=jobi_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

*(This file is ignored by Git for security.)*

---

## 🔧 5. Apply Migrations

```bash
cd backend
python manage.py migrate
```

✅ If this works, your backend is connected to PostgreSQL!

---

## 🖥️ 6. Start the Backend Server

```bash
python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) — it should return an API route (Welcome to Jobi API).

---

## 🌐 7. Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

This will start the React development server at [http://localhost:5173](http://localhost:5173)

---

## ✅ Done!

You now have:
- Django backend (localhost:8000)
- React frontend (localhost:5173)
- PostgreSQL database

---

## 📁 Bonus

If you want to share the project with others, add:

```
# .gitignore
.env
.venv/
node_modules/
```

