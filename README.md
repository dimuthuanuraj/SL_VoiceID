# 🎙️ SL VoiceID - Sri Lankan Voice Data Collection Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-10.12-orange?style=for-the-badge&logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern web application for collecting multi-lingual voice samples from Sri Lankan speakers**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Usage](#-usage) • [Architecture](#-architecture) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**SL VoiceID** is a sophisticated voice data collection platform designed to gather high-quality audio samples from Sri Lankan speakers across three languages: **Sinhala**, **Tamil**, and **English**. The platform enables researchers and institutions to build comprehensive voice datasets for machine learning, speech recognition, and linguistic research.

### 🎯 Use Cases

- **Speech Recognition Training**: Build datasets for Sinhala, Tamil, and English speech recognition models
- **Voice Analytics**: Collect voice samples for speaker identification and verification research
- **Linguistic Research**: Study pronunciation patterns, accents, and language variations across Sri Lanka
- **AI Model Development**: Create training data for voice assistants and conversational AI
- **Educational Tools**: Develop language learning applications with native speaker references
- **Accessibility Solutions**: Build voice-enabled interfaces for visually impaired users

---

## ✨ Features

### 🔐 **Secure Authentication**
- Firebase Authentication with email/password
- Unique Speaker ID generation for each user
- Secure profile management with Firestore database

### 🎤 **Multi-Language Recording**
- Support for **Sinhala**, **Tamil**, and **English** languages
- 5 AI-generated reading phrases per language
- Real-time audio recording with preview
- High-quality audio capture (WebM format)

### 🤖 **AI-Powered Phrase Generation**
- Google Gemini AI integration for contextual phrases
- Natural, conversation-like reading prompts
- Language-specific phrase generation

### ☁️ **Cloud Storage & Management**
- Automatic upload to Google Drive
- Metadata logging in Google Sheets
- Organized file naming with speaker ID, language, and timestamp
- Secure file storage with service account authentication

### 🎨 **Modern User Interface**
- Clean, responsive design built with **Tailwind CSS**
- **Radix UI** components for accessibility
- Dark mode support
- Mobile-friendly interface
- Real-time recording status indicators
- Visual feedback for completed recordings

### 📊 **Admin Dashboard**
- View all registered speakers
- Track recording progress
- Download collected audio samples
- Monitor system analytics

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15.2](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### **Backend & Services**
- **[Firebase Authentication](https://firebase.google.com/products/auth)** - User authentication
- **[Cloud Firestore](https://firebase.google.com/products/firestore)** - NoSQL database
- **[Google Drive API](https://developers.google.com/drive)** - Audio file storage
- **[Google Sheets API](https://developers.google.com/sheets)** - Metadata logging
- **[Google Gemini AI](https://ai.google.dev/)** - AI phrase generation

### **Development Tools**
- **[Genkit](https://firebase.google.com/products/genkit)** - AI workflow orchestration
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[TanStack Query](https://tanstack.com/query)** - Data fetching & caching

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Firebase project with Authentication and Firestore enabled
- Google Cloud project with Drive and Sheets API enabled
- Service account with appropriate permissions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dimuthuanuraj/SL_VoiceID.git
   cd SL_VoiceID
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-bucket"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
   NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
   
   # Google Service Account
   GOOGLE_CLIENT_EMAIL="service-account@project.iam.gserviceaccount.com"
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   
   # Google Drive & Sheets
   DRIVE_FOLDER_ID="your-drive-folder-id"
   SHEET_ID="your-sheet-id"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:9002`

5. **Run the AI service (optional)**
   ```bash
   npm run genkit:watch
   ```

### Building for Production

```bash
npm run build
npm start
```

---

## 📱 Usage

### For Speakers (Data Contributors)

1. **Register/Login**
   - Create an account with email and password
   - Receive a unique Speaker ID (e.g., `id90001`)
   - Fill in your profile (name, native language, age group, gender)

2. **Select Recording Language**
   - Choose from Sinhala, Tamil, or English
   - View 5 AI-generated reading phrases

3. **Record Audio**
   - Click the microphone icon to start recording
   - Read the displayed phrase naturally
   - Preview your recording before uploading
   - Re-record if needed

4. **Submit Recordings**
   - Upload completed recordings to cloud storage
   - Track your progress (5 phrases per language)
   - Switch languages to record more samples

### For Administrators

1. **Access Admin Dashboard**
   - Navigate to `/admin` route
   - Login with admin credentials

2. **View Data**
   - See all registered speakers
   - Monitor recording progress
   - Export data for analysis

---

## 🏗️ Architecture

### Project Structure

```
SL_VoiceID/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── actions/           # Server Actions
│   │   ├── admin/             # Admin dashboard
│   │   ├── register/          # Registration page
│   │   └── page.tsx           # Main recording page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── audio-recorder.tsx # Recording interface
│   │   ├── login-form.tsx     # Authentication form
│   │   └── header.tsx         # App header
│   ├── contexts/              # React Context
│   │   └── auth-context.tsx   # Authentication state
│   ├── services/              # Backend services
│   │   ├── firebase.ts        # Firebase initialization
│   │   ├── user-service.ts    # User operations
│   │   ├── google-service.ts  # Google APIs
│   │   └── google-drive-service.ts
│   ├── ai/                    # AI workflows
│   │   ├── genkit.ts          # Genkit configuration
│   │   └── flows/             # AI flows
│   └── lib/                   # Utilities
├── Research_logs/             # Development logs
├── docs/                      # Documentation
└── public/                    # Static assets
```

### Data Flow

```mermaid
graph TB
    subgraph "Speaker Flow"
        A[Speaker/User] -->|Records Audio| B[Audio Recorder Component]
        B -->|Sends Audio File| C[Server Action]
        C -->|Uploads File| D[Google Drive Storage]
        C -->|Logs Metadata| E[Google Sheets]
        F[Gemini AI] -->|Generates| G[Reading Phrases]
        G -->|Displays to| A
        H[Firebase Auth] -->|Authenticates| A
        I[Firestore DB] -->|Stores/Retrieves Profile| A
    end
    
    subgraph "Admin Flow"
        J[Administrator] -->|Accesses| K[Admin Dashboard]
        K -->|Queries| I
        K -->|Fetches Metadata| E
        K -->|Lists Files| D
        D -->|Downloads Audio| K
        E -->|Exports Data| K
        K -->|Visualizes Stats| J
        K -->|Manages Users| I
    end
    
    subgraph "Data Storage"
        D[Google Drive Storage]
        E[Google Sheets Metadata]
        I[Firestore Database]
    end
    
    style A fill:#e1f5ff
    style J fill:#fff3e0
    style D fill:#e8f5e9
    style E fill:#e8f5e9
    style I fill:#e8f5e9
```

---

## 🎨 UI/UX Highlights

### Design Philosophy
- **Minimalist**: Clean interface focusing on the recording task
- **Accessible**: WCAG compliant with proper ARIA labels
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Intuitive**: Clear visual feedback for recording states
- **Professional**: University/research-friendly aesthetic

### Key UI Components

#### 🎤 Audio Recorder
- Large, prominent microphone button
- Color-coded states (blue: ready, red: recording, green: completed)
- Real-time waveform visualization (planned)
- Playback controls for preview
- Progress indicators for completed phrases

#### 📋 Language Selection
- Card-based layout for language options
- Visual indication of native vs. recording language
- Progress tracking per language
- Smooth transitions between languages

#### 👤 User Profile
- Speaker ID badge prominently displayed
- Profile information sidebar
- Logout and settings access
- Progress statistics

---

## 🔒 Security Features

- ✅ Environment variables for sensitive credentials
- ✅ Firebase Authentication with secure password requirements
- ✅ Service account-based Google API access
- ✅ Server-side audio processing
- ✅ HTTPS enforcement in production
- ✅ Input validation and sanitization
- ✅ CORS configuration for API endpoints

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure code passes linting (`npm run lint`)

---

## 📊 Roadmap

- [ ] **Enhanced Analytics Dashboard**
  - Recording quality metrics
  - Speaker demographics visualization
  - Download statistics
  
- [ ] **Real-time Collaboration**
  - Live recording sessions
  - Admin monitoring
  
- [ ] **Advanced Audio Processing**
  - Noise reduction
  - Audio normalization
  - Format conversion
  
- [ ] **Multilingual UI**
  - Interface in Sinhala/Tamil
  - Localized instructions
  
- [ ] **Mobile App**
  - Native iOS/Android apps
  - Offline recording capability

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Machine Learning and Speech Processing Laboratory**  
University of Jaffna, Sri Lanka

### Contributors
- Project Lead: [Dimuthu Anuraj](https://github.com/dimuthuanuraj)
- Research Team: MLSP Lab, University of Jaffna

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/dimuthuanuraj/SL_VoiceID/issues)
- **Email**: [Contact MLSP Lab](mailto:your-email@university.lk)
- **Website**: [MLSP Lab](https://your-lab-website.com)

---

## 🙏 Acknowledgments

- Google Cloud Platform for API access
- Firebase team for authentication and database services
- Radix UI for accessible component primitives
- Next.js team for the excellent framework
- All contributors and voice data donors

---

<div align="center">

**Made with ❤️ for Sri Lankan Language Research**

⭐ **Star this repo** if you find it useful!

</div>
