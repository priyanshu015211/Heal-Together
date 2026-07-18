# HealTogether

> An AI-powered emotional wellness and peer-support platform built to make mental health support more accessible, private, and student-friendly.

---

## About The Project

HealTogether is a mental wellness platform designed specifically for students facing emotional stress, academic pressure, anxiety, burnout, loneliness, and other mental health challenges.

Many schools and colleges struggle with limited counseling resources, while students often hesitate to seek help due to fear of judgment or discomfort in traditional support systems. HealTogether aims to bridge this gap through AI-assisted emotional support and anonymous peer connections.

The platform focuses on creating a safe, accessible, and empathetic digital environment where students can express themselves freely and receive meaningful support.

---

## Problem Statement

Students today face increasing mental and emotional challenges caused by:

- Academic pressure
- Placements and career uncertainty
- Family expectations
- Social isolation
- Anxiety and burnout

At the same time:

- Many institutions lack adequate counseling infrastructure
- Professional help may not always be immediately accessible
- Students often avoid opening up due to stigma or discomfort
- Emotional struggles can escalate when left unsupported

This creates a critical need for a support system that is approachable, private, and available whenever students need it.

---

## Proposed Solution

HealTogether combines AI-powered assistance with community-based emotional support to help students cope in healthier ways.

### AI Wellness Assistant

An adaptive AI companion capable of:

- Conversational emotional support
- Voice and text interactions
- Mood check-ins
- Personalized coping suggestions
- Stress management guidance

The assistant is designed to provide students with a comfortable, judgment-free space to express their thoughts and emotions.

---

### Anonymous Peer Support System

A secure anonymous communication system where students can:

- Share experiences safely
- Vent without revealing identity
- Support one another emotionally
- Build meaningful peer connections

This feature encourages openness while preserving privacy and emotional safety.

---

## Planned Features

- AI-powered mental wellness chatbot
- Voice-enabled emotional support
- Anonymous student matching
- Mood tracking and emotional analytics
- Mental wellness journaling
- Guided coping exercises
- Emergency support resources
- Moderation and safety mechanisms
- Personalized wellness recommendations

---

## Tech Stack

### Frontend
- React.js / Next.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB / Firebase

### AI Integration
- OpenAI API
- Sentiment analysis models
- Recommendation systems

### Authentication & Security
- Firebase Authentication / Clerk
- Privacy-focused architecture

---

## Vision

To build a digital safe space where students feel:

- Heard  
- Supported  
- Understood  
- Connected

HealTogether aims to normalize conversations around mental wellness while making emotional support more accessible to students everywhere.

---

## Project Status

Initial MVP scaffold is in place: a Next.js + Tailwind app with four core
flows (AI assistant, mood check-in, journal, anonymous peer support), each
backed by a simple API route and an in-memory data store. This is the
foundation to build on, not the finished product.

---

## Getting Started

```bash
npm install
cp .env.example .env.local   # optional: add OPENAI_API_KEY for real AI replies
npm run dev
```

Then open http://localhost:3000.

Without an `OPENAI_API_KEY`, the AI Wellness Assistant still works — it
falls back to canned supportive responses so the whole app is runnable out
of the box.

### What's implemented

- `/chat` — AI Wellness Assistant (OpenAI-backed, with fallback responses)
- `/mood` — Mood check-in with history
- `/journal` — Private journaling
- `/support` — Anonymous peer support board

All data currently lives in an in-memory store (`lib/store.js`) and resets
on server restart. Swapping in MongoDB/Firebase is the natural next step.

### What's next

- Persistent storage (MongoDB / Firebase)
- Authentication (Firebase Auth / Clerk)
- Real anonymous matching instead of a shared board
- Mood analytics/trends
- Moderation & safety mechanisms for peer support
- Voice interaction for the AI assistant

---
## Trying to make this from scrath for improving my skills and upscaling somthing I thing is very import

