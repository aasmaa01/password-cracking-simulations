
# 🔐 Password Cracking Simulation — Cybersecurity Challenge

This project is a full-stack simulation platform to demonstrate various **password cracking techniques** using both a web interface and backend scripts/tools. It was built as part of a cybersecurity workshop and competition.

---

---

## 🎯 Project Purpose

> **Simulate realistic password cracking attacks** using multiple tools and techniques.

We assumed a scenario where password hashes were leaked. The goal was to demonstrate how attackers recover passwords through automated tools and highlight the importance of strong passwords and secure hashing.

---

## 👩‍💻 My Teammate's Role — Cracking Simulation Expert

She developed and organized **4 attack methods**:

1. **Brute Force Attack** — Trying all possible combinations  
2. **Dictionary Attack** — Testing against known or common passwords  
3. **Hydra Attack** — Automating login attempts against a web form  
4. **Rainbow Table Simulation** — Matching hashes to precomputed values

🔧 She used tools like:
- **Python** for custom simulations
- **Hydra**, **John the Ripper**, and **Hashcat** for automated attacks

Each technique is stored in a dedicated folder and runs in the terminal or through the backend API.

---

## 🚀 How to Run

### 📌 Prerequisites:
- Node.js + npm
- Python 3
- (Optional) Hydra (on Kali Linux or WSL)

### ▶️ Steps:
1. Clone the project
2. Launch the backend:
   ```bash
   cd backend
   npm install
   node server.js
   ```
3. Launch the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Open in your browser:  
   👉 `http://localhost:5173`

---

## 🔥 Highlights

- Interactive UI to simulate attacks  
- Realistic backend with hash cracking tools  
- Modular architecture: easily extensible  
- Demonstrates the **importance of strong password policies**

---

## 🤝 Team

- **🧠 Cracking Expert:** _Lyna_  
- **🖥️ Full-Stack Integrator & Frontend Dev:** _Asma Soltani_

---

## 📢 Warning

This project is **for educational purposes only**. Do not use these techniques on real systems or services. Always follow ethical hacking guidelines.

---
