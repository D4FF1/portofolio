# Ethan Miles - Premium Portfolio

A modern, premium portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features smooth animations, responsive design, and a contemporary aesthetic.

## Features

- Modern Hero Section with Profile Image
- About Section with Animated Statistics
- Portfolio Showcase with Grid Layout
- Services Section with Interactive Cards
- Testimonials Section
- Call-to-Action Section
- Sticky Navigation Bar with Scroll Effects
- Responsive Design (Mobile, Tablet, Desktop)
- Smooth Animations and Micro-interactions
- Premium UI/UX Design
- SEO Optimized
- Production Ready

## Tech Stack

- **Next.js 14** - React framework
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **TypeScript** - Type safety
- **Responsive Design** - Mobile-first approach

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── ui/                 # Reusable components
│       ├── PortfolioCard.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialCard.tsx
│       └── StatCounter.tsx
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

Edit content in section components:
- `components/sections/Hero.tsx` - Hero section content
- `components/sections/About.tsx` - About section with statistics
- `components/sections/Portfolio.tsx` - Portfolio projects
- `components/sections/Services.tsx` - Services offered
- `components/sections/Testimonials.tsx` - Client testimonials

## Design Features

- Clean, minimal aesthetic with soft blue accents
- Large typography for premium feel
- Glassmorphism effects
- Smooth hover interactions
- Animated counters
- Responsive grid layouts
- Premium shadows and borders

## Performance

- Optimized image loading
- Code splitting
- Lazy loading
- SEO optimized
- Fast page load times

## License

Private - All rights reserved
