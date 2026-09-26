# SafeNet Youth

**AI-powered online safety education for young people**

SafeNet Youth is an educational web application designed to help young people recognize, understand, and respond safely to common online threats.

## 🌐 Features

* 🛡️ **Online Safety Education** — Learn about common digital threats and safer online behavior.
* 🔎 **AI Scam Investigator** — Analyze suspicious messages and identify potential scam or phishing indicators.
* 🏦 **Bank Scam Simulator** — Learn how financial scams can appear in real-world situations.
* 🎭 **Deepfake Safety** — Understand the risks associated with manipulated images, videos, and AI-generated content.
* 👤 **Fake Account Awareness** — Learn how to recognize suspicious or impersonated accounts.
* 🚨 **Blackmail & Private Image Safety** — Educational guidance for responding safely to online harassment and image-based abuse.
* 🆘 **Get Help** — Safety-focused guidance for dealing with online threats.

## 🧠 AI Scam Investigator

The AI Scam Investigator provides educational analysis of suspicious messages.

It can help identify indicators such as:

* Phishing attempts
* Requests for passwords or verification codes
* Suspicious payment requests
* Fake bank or government messages
* Urgent or threatening language
* Suspicious links or account requests

**Important:** AI analysis is educational guidance and should not be treated as professional, legal, financial, or emergency advice.

## 🛠️ Technologies

* React
* Vite
* JavaScript
* CSS
* Node.js
* Express
* Google Gemini API

## 📁 Project Structure

```text
safenet-youth/
├── public/
├── src/
│   ├── components/
│   ├── AIScamInvestigator.jsx
│   ├── BankScamSimulator.jsx
│   ├── DeepfakeSafety.jsx
│   ├── SafeNetKids.jsx
│   └── server/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/dearnothing68-gif/safenet-youth.git
cd safenet-youth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

### 4. Start the backend

The backend requires its environment configuration and Gemini API key.

**Never publish your API key or commit your `.env` file to GitHub.**

## 🔐 Security

SafeNet Youth uses environment variables for sensitive API credentials.

The `.env` file should remain local and must never be uploaded to GitHub.

The application is intended for **education and online-safety awareness**.

## 🎯 Project Goal

SafeNet Youth aims to make online safety education easier to understand and more accessible to young people by combining interactive learning experiences with AI-assisted educational guidance.

## 📌 Project Status

**Current status:** Working development version

The frontend and AI scam analysis system have been tested locally.

## 👨‍💻 Author

**Faraz Ahmed**

Built as a youth-focused online safety education project.
