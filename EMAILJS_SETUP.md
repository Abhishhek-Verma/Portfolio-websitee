# EmailJS Setup Guide

Your contact form is now configured to use EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (abhishekatkiet@gmail.com)
5. Copy the **Service ID** (something like `service_abc1234`)

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact from {{from_name}} - {{subject}}
```

**Body:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"** and copy the **Template ID** (something like `template_xyz5678`)

## Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (something like `abc123XYZ456`)

## Step 5: Update Environment Variables
Open the `.env` file in the root directory and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234      # Replace with your Service ID
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678    # Replace with your Template ID
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ456         # Replace with your Public Key
```

**Important:** 
- The `.env` file is git-ignored for security
- Never commit your actual credentials to version control
- When deploying, add these variables to your hosting platform's environment settings

## Step 6: Test the Form
1. Save the file
2. The dev server will auto-reload
3. Go to the Contact section on your website
4. Fill out the form and submit
5. You should receive an email at abhishekatkiet@gmail.com

## Troubleshooting
- If emails don't arrive, check your EmailJS dashboard for error logs
- Make sure you've verified your email with EmailJS
- Check spam folder for test emails
- Free tier limit: 200 emails/month

## Optional: Enable reCAPTCHA
To prevent spam, enable reCAPTCHA in EmailJS dashboard:
1. Go to **"Security"** in EmailJS
2. Enable reCAPTCHA
3. Follow their instructions

That's it! Your contact form will now send emails directly to abhishekatkiet@gmail.com without needing a backend server.
