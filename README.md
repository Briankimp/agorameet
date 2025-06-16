# AgoraMeet – Minimal Real-Time Video Chat App

AgoraMeet is a real-time video communication web app built with Next.js and the Agora Web SDK. It allows users to join a virtual video room, share camera and microphone streams, and see other connected participants — all in the browser.

## ✨ Core Features

- **Join a Video Room:** Enter a static or dynamic channel name and connect to a video call
- **Display Local Video:** Show your own webcam feed on screen
- **Display Remote Users:** Show video feeds of other users in the room
- **Mute/Unmute Mic:** Toggle microphone on/off
- **Enable/Disable Camera:** Toggle video stream on/off
- **Leave Room:** Clean up tracks and leave the room gracefully

## 💡 Optional Stretch Features

- **Token Authentication:** Generate tokens securely via Next.js API routes
- **Screen Sharing:** Share your screen using Agora screen track
- **Responsive Layout:** Mobile/tablet-friendly video grid
- **User Identity:** Add simple user login or display names in video tiles

## 🧱 Tech Stack

- **Next.js:** React framework with routing and API routes
- **Agora SDK:** Real-time audio/video handling
- **Tailwind CSS (optional):** Fast styling and layout
- **React Hooks:** For managing Agora client state
- **Vercel:** Deployment (Next.js native)

## 🚀 Getting Started

1. Clone the repo and install dependencies:

   ```bash

   git clone <your-repo-url>
   cd agora-next-app
   npm install
   ```

2. Add your Agora App ID to a `.env.local` file:

   ```env

   NEXT_PUBLIC_AGORA_APP_ID=your-agora-app-id
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

Enjoy building with AgoraMeet! If you want to add more features or need help, check the issues or open a discussion.
