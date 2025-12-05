# Supabase Setup Guide

## 🚀 Setting Up Your Supabase Backend

Follow these steps to enable authentication and contact form on your portfolio!

---

## Step 1: Create Supabase Account

1. **Go to**: https://supabase.com
2. Click **"Start your project"** or **"Sign In"**
3. Sign up with **GitHub** (recommended) or email
4. Verify your email if needed

---

## Step 2: Create New Project

1. Click **"New Project"**
2. Fill in the details:
   - **Name**: `portfolio-website` (or any name you like)
   - **Database Password**: Create a strong password (save it somewhere safe!)
   - **Region**: Choose closest to you (e.g., "Southeast Asia" if in Pakistan)
   - **Pricing Plan**: Select **Free** (perfect for portfolio sites)

3. Click **"Create new project"**
4. Wait ~2 minutes for setup to complete ⏳

---

## Step 3: Get Your API Keys

Once your project is ready:

1. In the Supabase dashboard, click **"Settings"** (gear icon in sidebar)
2. Click **"API"** in the settings menu
3. You'll see two keys:

### Copy These Values:

**Project URL:**
```
https://xxxxxxxxxxxxx.supabase.co
```

**anon public key (public):**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...VERY_LONG_KEY
```

> **Keep these safe!** You'll need them in the next step.

---

## Step 4: Update Environment Variables

**I'll update your `.env.local` file automatically once you give me the keys!**

Just paste them here in this format:
```
URL: https://xxxxxxxxxxxxx.supabase.co
KEY: eyJhbGciOiJI...your_long_key
```

Or I can open the file for you to edit manually if you prefer.

---

## Step 5: Create Database Tables

We need to create a table for contact form messages.

### Option A: SQL Editor (Easy!)

1. In Supabase dashboard, click **"SQL Editor"** in sidebar
2. Click **"New query"**
3. **Copy and paste this SQL:**

```sql
-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (send messages)
CREATE POLICY "Anyone can send messages"
ON contact_messages FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to read
CREATE POLICY "Authenticated users can read messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);
```

4. Click **"Run"** (or press Ctrl+Enter)
5. You should see: **"Success. No rows returned"**

### Option B: Table Editor (Visual)

1. Click **"Table Editor"** in sidebar
2. Click **"Create a new table"**
3. Fill in:
   - **Name**: `contact_messages`
   - **Columns**:
     - `id` (uuid, primary key) - auto-added
     - `name` (text, required)
     - `email` (text, required)
     - `message` (text, required)
     - `read` (bool, default: false)
     - `created_at` (timestamptz) - auto-added

---

## Step 6: Enable Email Auth (For Login/Signup)

1. Go to **"Authentication"** → **"Providers"** in sidebar
2. **Email** should already be enabled ✅
3. (Optional) Configure email templates under **"Email Templates"**

> **Note**: For testing, you can use any email. Supabase will log auth events even without real email delivery in development.

---

## Step 7: Test Authentication

Once I update your `.env.local` with the real keys:

1. Restart the dev server (I'll do this)
2. Go to `/signup`
3. Create a test account:
   - Name: Test User
   - Email: test@example.com
   - Password: test123 (min 6 chars)
4. Should redirect to home page ✅
5. Check Supabase → **"Authentication"** → **"Users"** to see your new user!

---

## Step 8: Test Contact Form

1. Go to the Contact section on your site
2. Fill out the form and submit
3. Check Supabase → **"Table Editor"** → **"contact_messages"**
4. Your message should appear! ✅

---

## 🎉 You're Done!

Your portfolio now has:
- ✅ Working authentication (login/signup)
- ✅ Contact form that saves to database
- ✅ Secure, free, open-source backend
- ✅ Ready for deployment!

---

## Next Steps

Once Supabase is configured:
1. **Deploy to Vercel** (I'll help with this)
2. **Add environment variables** in Vercel dashboard
3. Your portfolio will be live! 🚀

---

## Need Help?

**Supabase Dashboard**: https://app.supabase.com
**Supabase Docs**: https://supabase.com/docs

Just let me know when you have the URL and API key, and I'll configure everything!
