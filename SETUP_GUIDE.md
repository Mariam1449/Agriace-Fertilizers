# FertilizerPro Website - Quick Setup Guide

## What You Have

A complete Next.js website setup for a fertilizers business with:

- **4 Pages**: Home, Products, About, Contact
- **Responsive Navigation**: Header with mobile menu
- **Professional Footer**: With links and contact info
- **Modern Styling**: Tailwind CSS with green/agriculture theme
- **TypeScript**: Full type safety
- **Code Quality Tools**: ESLint and Prettier configured

## Quick Start (3 Steps)

### 1. Navigate to the Project

```bash
cd /home/mariam/Documents/Fertilizers
```

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit: **http://localhost:3000**

That's it! Your website is now running.

## What to Do Next

### Immediate Customization

1. **Change Company Name**: Edit `src/components/layout/Header.tsx` (line 20)
2. **Update Contact Info**: Edit `src/components/layout/Footer.tsx` (lines 57-60)
3. **Modify Products**: Edit `src/app/products/page.tsx` (lines 4-32)

### Add Your Own Content

- **Logo**: Add `logo.png` to the `public/` folder and update Header.tsx
- **Images**: Add product images to `public/products/` folder
- **Favicon**: Replace `public/favicon.ico` with your own

### Deploy Your Website

**Option 1: Vercel (Recommended - Free)**
1. Create account at https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live

**Option 2: Netlify**
1. Run `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Done!

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production server
npm run lint         # Check code quality
npm run format       # Format all code
```

## Project Structure Overview

```
Fertilizers/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── products/         # Products page
│   │   ├── about/            # About page
│   │   └── contact/          # Contact page
│   └── components/
│       └── layout/
│           ├── Header.tsx    # Navigation bar
│           └── Footer.tsx    # Footer
├── public/                   # Put images here
└── README.md                 # Full documentation
```

## Color Scheme

The site uses a green agricultural theme:
- **Primary Green**: #22c55e
- **Lime**: #84cc16
- **Yellow Accent**: #eab308

Change these in `src/app/globals.css` (lines 4-7)

## Need Help?

- Full documentation: See `README.md`
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

## Tips

1. **Auto-reload**: The dev server auto-reloads when you save files
2. **Dark Mode**: Works automatically based on system preferences
3. **Mobile Friendly**: Test on different screen sizes
4. **Type Safety**: TypeScript will catch errors before runtime

---

Happy building!
