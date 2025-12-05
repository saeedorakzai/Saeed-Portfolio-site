# Vercel Deployment Guide

## 🚀 Deploying Your Portfolio to Vercel

Vercel is the best place to host Next.js apps. It's free, fast, and automatic.

---

## Step 1: Push to GitHub

**Make sure your latest code is on GitHub.**
(If you haven't pushed yet, see `docs/GITHUB_GUIDE.md`)

---

## Step 2: Import to Vercel

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** → **"Project"**.
3.  Find your `portfolio-website` repository in the list.
4.  Click **Import**.

---

## Step 3: Configure Project

You will see a "Configure Project" screen.

1.  **Framework Preset**: Leave as `Next.js`.
2.  **Root Directory**: Leave as `./`.
3.  **Environment Variables**: **(CRITICAL STEP)**
    *   Click to expand **Environment Variables**.
    *   Add these keys (copy from your `.env.local` file):

    | Key | Value |
    | :--- | :--- |
    | `NEXT_PUBLIC_SUPABASE_URL` | `https://vakwymvhoqgvhimsuyla.supabase.co` |
    | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (Your long key) |
    | `NEXT_PUBLIC_SITE_URL` | `https://your-project-name.vercel.app` (You can update this later) |

4.  Click **Deploy**.

---

## Step 4: Wait for Build

Vercel will now build your site. It takes about **1-2 minutes**.
You'll see a lot of confetti when it's done! 🎉

---

## Step 5: Update Google Auth (Important!)

Once your site is live, you'll have a real URL (e.g., `https://saeed-portfolio.vercel.app`).

**You need to tell Google and Supabase about this new URL.**

### 1. Update Supabase
1.  Go to **Supabase Dashboard** → **Authentication** → **URL Configuration**.
2.  **Site URL**: Change `http://localhost:3000` to your new Vercel URL.
3.  **Redirect URLs**: Add `https://your-vercel-url.vercel.app/auth/callback`.
4.  Click **Save**.

### 2. Update Google Cloud
1.  Go to [Google Cloud Console](https://console.cloud.google.com/).
2.  Go to **APIs & Services** → **Credentials**.
3.  Click your **"Supabase Auth"** client.
4.  **Authorized redirect URIs**:
    *   Add your new Supabase Callback URL (it stays the same as before: `https://vakwymvhoqgvhimsuyla.supabase.co/auth/v1/callback`).
    *   *Wait, actually you don't need to change Google Cloud if you are using Supabase Auth!* Supabase handles the redirect. You only need to update Supabase (Step 5.1).

---

## 🎉 You're Live!

Share your new URL with the world!
