# The Baadshah Garment & Accessories - Website

Premium website for **The Baadshah Garment & Accessories**, Odhav, Ahmedabad.

## Deploying on Vercel

This repository is pre-configured for **Vercel** with `vercel.json`.

### Method 1: Via GitHub (Recommended)
1. Push this codebase to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your website will be live with an SSL certificate and custom domain support in under 1 minute.

### Method 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts (select default settings) and Vercel will deploy immediately.

---

### Local Development
```bash
npm install
npm run dev
```

### Production Build Test
```bash
npm run build
npm run preview
```
