# To-Do List Progressive Web App (PWA)

This is a **Progressive Web App (PWA)** built using **React** that allows users to manage their tasks efficiently. The app supports offline functionality using **service workers** and stores tasks in **localStorage** for persistence.

---

## 🚀 Features
- **Add, View, and Delete Tasks**
- **Mark Tasks as Completed**
- **Offline Functionality** using service workers
- **Responsive Design** for desktop and mobile
- **Data Persistence** using localStorage
- **PWA Compatibility** with a manifest file & icons

---

## 🛠 Setup & Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/todo-pwa.git
cd todo-pwa
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Development Server**
```bash
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### **4️⃣ Build for Production**
```bash
npm run build
```
- The optimized files will be in the `dist` folder.

### **5️⃣ Deploy as a PWA**
1. Ensure your **service worker** is registered in `main.jsx`.
2. Use [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/) for PWA support.
3. Deploy using **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 📂 Project Structure
```
📦 todo-pwa
 ┣ 📂 src
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┃ ┣ 📜 serviceWorkerRegistration.js
 ┃ ┣ 📜 manifest.json
 ┃ ┣ 📜 styles.css
 ┃ ┗ 📂 assets (icons & logos)
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 vite.config.js
 ┗ 📜 README.md
```

---

## 📜 Assumptions & External Resources
- **React & Vite** are used for fast development.
- **Vite PWA Plugin** enables PWA capabilities.
- **IndexedDB/localStorage** ensures data persistence.
- **Tailwind CSS (or normal CSS)** is used for styling.
- **Icons & Manifest.json** ensure mobile-friendly installation.

---

## 📧 Contact
For any issues or improvements, feel free to open an **issue** or contribute via **pull requests**.

🔗 **GitHub Repo:** [Your Repo Link]  
📩 **Email:** [Your Email]

