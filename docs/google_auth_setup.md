# Google Authentication Setup Guide

## 🚀 Enable "Sign in with Google"

To make the Google button work, you need to get a **Client ID** and **Client Secret** from Google and give them to Supabase.

---

## Step 1: Get Callback URL from Supabase

1. Go to **Supabase Dashboard** → **Authentication** → **Providers**.
2. Click **Google**.
3. Copy the **Callback URL** (it looks like: `https://vakwymvhoqgvhimsuyla.supabase.co/auth/v1/callback`).
4. Keep this tab open!

---

## Step 2: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Click the project dropdown (top left) → **New Project**.
3. Name it `Portfolio Auth` (or anything).
4. Click **Create**.

---

## Step 3: Configure OAuth Consent Screen

1. In the side menu, go to **APIs & Services** → **OAuth consent screen**.
2. Select **External** and click **Create**.
3. Fill in:
   - **App Name**: `Saeed Portfolio`
   - **User Support Email**: Select your email.
   - **Developer Contact Email**: Enter your email again.
4. Click **Save and Continue** (skip Scopes and Test Users for now).
5. Click **Back to Dashboard**.

---

## Step 4: Create Credentials

1. Go to **APIs & Services** → **Credentials**.
2. Click **+ CREATE CREDENTIALS** → **OAuth client ID**.
3. **Application type**: Select **Web application**.
4. **Name**: `Supabase Auth`.
5. **Authorized redirect URIs**:
   - Click **ADD URI**.
   - **Paste the Callback URL** you copied from Supabase in Step 1.
6. Click **Create**.

---

## Step 5: Add Keys to Supabase

1. You will see a popup with **Client ID** and **Client Secret**.
2. Go back to your **Supabase Dashboard** (Google Provider settings).
3. Paste the **Client ID** into the `Client ID` box.
4. Paste the **Client Secret** into the `Client Secret` box.
5. Toggle **Enable Google Provider** to **ON**.
6. Click **Save**.

---

## 🎉 You're Done!

Now go to your website login page and click **"Sign in with Google"**. It should work perfectly!
