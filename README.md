# CivicConnect 🚀
## Multilingual Civic Reporting PWA
## Overview

CivicConnect is a mobile-first Progressive Web Application (PWA) that helps citizens report civic issues easily.Users can select a complaint category, describe the issue using text or voice, upload images, and receive a unique reference ID.The application is designed for multilingual users and supports offline reporting using local storage.

## Problem Statement
Citizens often face difficulties reporting public issues due to:
- Complex complaint systems
- Language barriers
- Poor internet connectivity
- Lack of complaint tracking
CivicConnect provides a simple, accessible, and reliable reporting solution.

## Features
✅ Three-screen complaint flow
1. Category Selection
2. Issue Details
3. Confirmation

✅ Bilingual Support
- English
- Hindi

✅ Voice Input
- Implemented using Web Speech API

✅ Image Upload
- Users can attach issue photos

✅ Unique Reference ID
- Generated after submission

✅ Status Timeline
- Shows complaint progress

✅ Offline First Support
- Reports saved when offline
- Automatic sync when internet returns

✅ Installable PWA
- Manifest
- Service Worker
- Home screen installation

## How It Works
Select Category
    ↓
Enter Details
(Text + Image + Voice)
    ↓
Submit Report
    ↓
Generate Reference ID
    ↓
Track Status

## Offline Working
When online:Submit Report -> Save to Local Storage
When offline: Submit Report-> Offline Queue-> Internet Available-> Auto Sync

## Technology Stack
Frontend:
- React.js
- Vite
- Tailwind CSS
- React Router
- Framer Motion

Browser APIs:
- Web Speech API
- Local Storage
- Service Worker
- Web Manifest
## Project Structure
src
├── components
├── pages
├── context
├── utils
├── assets
├── App.jsx
└── main.jsx

## How To Run
### Install dependencies
npm install
### Start project
npm run dev
Open:
http://localhost:5173/

## Production Build
npm run build
npm run preview
## Testing Offline Mode
1. Open Chrome DevTools
2. Go to Network tab
3. Select Offline mode
4. Submit a report
5. Enable internet again

The report automatically syncs.

## Design Decisions

- Mobile-first UI for smartphone users
- Simple navigation for easy reporting
- Lightweight design for slow networks
- Multilingual interface for accessibility

## Limitations

- No backend integration
- No admin dashboard
- No real-time notifications

## Future Enhancements

- Government authority dashboard
- GPS-based reporting
- AI complaint classification
- Push notifications

## AI Usage Log

Tool: ChatGPT
Used for:
- Debugging React issues
- Improving code structure
- Documentation support
- PWA feature implementation

## Developer
Vaishnavi Pote
