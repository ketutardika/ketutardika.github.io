# Personal Portfolio Website

A modern, high-performance personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful dark/light themed UI with purple gradient accents
- **Particle Background**: Interactive particle network with mouse tracking and theme integration
- **Animated Typing Effect**: Dynamic text animation in the hero section
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 16 for optimal performance and SEO
- **Smooth Animations**: Engaging user experience with smooth transitions
- **Analytics Integration**: Vercel Analytics for tracking website performance
- **Static Export**: Fully static site generation for fast loading

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel Analytics](https://vercel.com/analytics) - Analytics

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone git@github.com:ketutardika/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   ├── ui/                # UI components
│   └── ThemeProvider.tsx  # Theme context
├── public/                # Static assets
└── sources/               # Content sources
```

## Customization

### Change Theme Colors

Modify the purple gradient colors in `tailwind.config.ts` and component files.

### Customize Particle Background

Edit [components/ui/ParticleBackground.tsx](components/ui/ParticleBackground.tsx) to change:
- Number of particles
- Particle colors and opacity
- Connection distance and lines
- Mouse interaction radius
- Animation speed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Static Hosts

1. Build the project:
```bash
npm run build
```

2. Deploy the `out/` directory to:
   - Netlify
   - GitHub Pages
   - Cloudflare Pages
   - AWS S3
   - Any static hosting service

## License

All rights reserved © 2026 I Ketut Ardika