# Deploy Your Portfolio to Netlify 🚀

This guide will help you deploy your portfolio website to Netlify for free.

## Prerequisites
- A GitHub account
- Your portfolio code pushed to a GitHub repository
- EmailJS credentials (Service ID, Template ID, Public Key)

---

## Step 1: Prepare Your Project

### A. Push Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `portfolio-website` (or your preferred name)
   - **Do NOT** check "Initialize with README"
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy to Netlify

### A. Sign Up / Log In to Netlify

1. Go to [netlify.com](https://www.netlify.com/)
2. Click "Sign up" → "Sign up with GitHub"
3. Authorize Netlify to access your GitHub account

### B. Import Your Project

1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your repositories
4. Select your **portfolio-website** repository

### C. Configure Build Settings

Netlify should auto-detect the settings from your `netlify.toml` file:

- **Build command**: `npm run build`
- **Publish directory**: `dist/public`
- **Node version**: 18

If not auto-detected, enter these manually.

### D. Add Environment Variables ⚠️ IMPORTANT

Before deploying, add your EmailJS credentials:

1. Click **"Show advanced"** → **"New variable"**
2. Add these three variables:

   ```
   Variable Name: VITE_EMAILJS_SERVICE_ID
   Value: service_5hnhjax
   
   Variable Name: VITE_EMAILJS_TEMPLATE_ID
   Value: template_ynhvljo
   
   Variable Name: VITE_EMAILJS_PUBLIC_KEY
   Value: SibXJWz9zcMWcEyaB
   ```

   **Note**: These are your actual credentials. Keep them secure!

3. Click **"Deploy site"**

---

## Step 3: Wait for Deployment

- Netlify will build and deploy your site (takes 1-3 minutes)
- You'll see build logs in real-time
- Once complete, you'll get a URL like: `https://random-name-123456.netlify.app`

---

## Step 4: Customize Your Domain (Optional)

### A. Change Site Name

1. Go to **Site settings** → **General** → **Site details**
2. Click **"Change site name"**
3. Enter your preferred name: `abhishek-verma-portfolio`
4. Your new URL: `https://abhishek-verma-portfolio.netlify.app`

### B. Add Custom Domain (Optional)

If you own a domain (e.g., `abhishekverma.com`):

1. Go to **Domain management** → **Add custom domain**
2. Follow Netlify's instructions to configure DNS
3. Netlify provides free HTTPS certificates automatically!

---

## Step 5: Test Your Deployed Site

1. Visit your Netlify URL
2. **Test the contact form**:
   - Fill out the form
   - Submit it
   - Check your email at **abhishekatkiet@gmail.com**
3. **Test GitHub links**:
   - Click "Source Code" buttons on projects
   - Should open GitHub repositories in new tabs

---

## Automatic Deployments

Every time you push to GitHub, Netlify will automatically rebuild and redeploy your site! 🎉

### To update your site:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Wait 2-3 minutes, and your changes will be live!

---

## Environment Variables Reference

Your `.env` file is **NOT** pushed to GitHub (it's in `.gitignore`).

You need to set these in **Netlify Dashboard** → **Site settings** → **Environment variables**:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_5hnhjax` | EmailJS Service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_ynhvljo` | EmailJS Template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | `SibXJWz9zcMWcEyaB` | EmailJS Public Key |

---

## Troubleshooting

### Build Fails

1. Check build logs in Netlify dashboard
2. Make sure all dependencies are in `package.json`
3. Verify Node version is 18

### Contact Form Not Working

1. Verify environment variables are set in Netlify
2. Check EmailJS dashboard for error logs
3. Make sure EmailJS template uses correct variables

### 404 Errors on Refresh

- The `netlify.toml` file handles this with redirect rules
- Make sure it's in the root directory and pushed to GitHub

### Links Not Working

- Hard refresh browser: `Ctrl + Shift + R`
- Check browser console for errors

---

## Your Deployment Checklist ✅

Before deploying, ensure:

- [x] Code has no errors (`npm run dev` works locally)
- [x] All content is updated (email, projects, skills, etc.)
- [x] EmailJS is configured and tested locally
- [x] `.gitignore` includes `.env` and `node_modules`
- [x] `.env` file is in `client/.env` (not root)
- [x] `netlify.toml` is in project root
- [x] Code is pushed to GitHub
- [x] Environment variables are set in Netlify dashboard

---

## Additional Resources

- **Netlify Docs**: https://docs.netlify.com/
- **Custom Domains**: https://docs.netlify.com/domains-https/custom-domains/
- **EmailJS Docs**: https://www.emailjs.com/docs/

---

## Summary

Your portfolio is now live! 🎉

- **URL**: `https://your-site-name.netlify.app`
- **Auto-deploys**: Every GitHub push
- **HTTPS**: Enabled by default
- **Contact Form**: Sends emails via EmailJS

**Share your portfolio link with potential employers and show off your work!** 🚀
