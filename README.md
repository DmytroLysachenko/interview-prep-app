# InterPrep

InterPrep is an AI-powered platform designed to help users prepare for technical interviews. It simulates real interview scenarios using advanced AI models, provides real-time voice interaction, and delivers comprehensive feedback to enhance your preparation process.

## 🚀 Features

- **AI-Powered Interviews**: Simulate real technical interviews with AI-generated questions and feedback.
- **Real-Time Voice Interaction**: Utilize voice-based conversations powered by Vapi for a realistic interview experience.
- **Personalized Feedback**: Receive AI-generated feedback on your responses for continuous improvement.
- **Secure Authentication**: Firebase-based authentication for secure sign-up and sign-in.
- **Modern UI**: Clean and responsive UI built with ShadCN and Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend**: Next.js (with TypeScript)
- **UI**: ShadCN UI, Tailwind CSS
- **AI Models**: Gemini (via AI SDK)
- **Voice/Transcription**: Vapi (real-time streaming)
- **Authentication & Database**: Firebase

## 🔄 Workflow

1. **Authentication**: Users sign in/up via Firebase authentication.
2. **Interview Generation**: Vapi initiates the first call to generate the interview session.
3. **Question Creation**: Gemini AI generates tailored interview questions.
4. **Interaction**: Users answer questions via real-time voice or text.
5. **Feedback**: AI processes responses to generate personalized feedback based on the provided schema.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/DmytroLysachenko/interview-prep-app.git
cd interview-prep-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file and populate it with the following:

```bash
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```

## ▶️ Running the App

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## ✅ Linting

Ensure code quality by running:

```bash
npm run lint
```

## 📊 Dependencies

Key packages used in the project:

- `next` (15.x)
- `react` (19.x)
- `firebase` (11.x)
- `@ai-sdk/google` (1.x)
- `@vapi-ai/web` (2.x)
- `react-hook-form` (7.x)
- `tailwindcss` (4.x)

---

📧 Contact

If you have any questions or feedback, feel free to reach out:

Email: [dlysachenko98@gmail.com](mailto:dlysachenko98@gmail.com)

GitHub: [Dmytro Lysachenko](https://github.com/DmytroLysachenko)

---

Built with ❤️ using Next.js.
