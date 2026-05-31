# NextGen ICT Club - Deployment Guide

This project is built with Next.js and Firebase. Follow these steps to host it on Netlify.

## How to Host on Netlify

### Step 1: Push code to GitHub
Create a new repository on GitHub and push your local files there.

### Step 2: Connect to Netlify
1. Go to [Netlify](https://www.netlify.com/) and log in.
2. Click **"Add new site"** -> **"Import from existing project"**.
3. Select **GitHub** and authorize Netlify.
4. Choose your repository.
5. Netlify will automatically detect the settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

### Step 3: Add Environment Variables
This is the most important step for Firebase to work.
1. Go to your Site Settings in Netlify.
2. Navigate to **Environment variables**.
3. Add the following keys from your Firebase Console:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

### Step 4: Deploy
Netlify will build your site. Once finished, you will get a live URL!

---
© 2026 NextGen ICT Club
