
# 🌾 Smart Farming Assistant – Irrigation & Fertilizer Recommendation System

An intelligent, AI-powered web application that assists farmers in making data-driven decisions about **irrigation** and **fertilizer application**, based on environmental and crop parameters.

---

## 🚀 Features

- 🌱 **Irrigation Prediction** based on soil moisture, humidity, temperature, and pressure
- 🧪 **Fertilizer Recommendation** tailored to soil and crop needs
- 📊 Interactive, real-time results visualization
- 🤖 ML model integration with dynamic prediction pipeline
- 🌐 Fullstack application with a React frontend and Node.js backend
- 🔐 Secure API access with CORS and environment-based config

---

## 🛠️ Tech Stack

### Frontend:
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- Context API & Hooks

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Body-parser](https://www.npmjs.com/package/body-parser)

### AI/ML Integration:
- Custom trained ML models for predictions
- (Optional) Gemini/GPT integration for fertilizer insights

---

## 📂 Project Structure

```
/frontend           → React frontend (Vite)
/Backend           → Express backend API
/Backend/models    → ML models / prediction pipelines
.env              → Environment config for sensitive variables
```

---

## 🔧 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/TajinderS22/MinorProject.git
cd agroadvisors
```

### 2. Backend Setup
```bash
cd agroadvisors/Backend
npm install
# Create a .env file
touch .env
```

`.env` contents:
```
MONGO_DB_URI=your_mongodb_connection_string
PORT=3000
```

Run the server:
```bash
npm start
```

---

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧠 Prediction Parameters

### 🌧 Irrigation Model:
- Soil Moisture
- Soil Humidity
- Air Humidity
- Temperature
- Pressure

### 🧪 Fertilizer Model:
- Crop type
- Soil nutrients (NPK)
- Season
- Temperature & humidity

---

## 📸 Screenshots

![Prediction Result](./screenshots/prediction.png)
![Fertilizer Recommendation](./screenshots/fertilizer.png)

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/awesome-feature`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push to branch: `git push origin feature/awesome-feature`
5. Open a Pull Request

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 💡 Credits

Made with ❤️ by Tajinder Singh  
NIT Jalandhar | IC Branch | 2026  
