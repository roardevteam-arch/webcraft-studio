# WebCraft Studio

A modern, professional website for a freelance web design & development service built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Next.js 14 (App Router)** - React framework with server-side rendering
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Dark Mode** - Full dark mode support
- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- **Fast Performance** - Optimized images and lazy loading
- **Modern UI** - Clean, professional design

## Pages

- **Home** - Hero section, services overview, why choose us, featured projects, testimonials, CTA
- **Services** - Detailed services list with pricing packages
- **Portfolio** - Filterable project gallery
- **About** - Skills, process, and story
- **Contact** - Working contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/webcraft-studio.git

# Navigate to the project
cd webcraft-studio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Deploy automatically

```bash
# Or deploy using Vercel CLI
npm i -g vercel
vercel
```

## Project Structure

```
webcraft-studio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   ├── globals.css   # Global styles
│   │   ├── services/     # Services page
│   │   ├── portfolio/    # Portfolio page
│   │   ├── about/        # About page
│   │   └── contact/      # Contact page
│   ├── components/       # Reusable components
│   └── lib/              # Data and utilities
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## Customization

### Branding
- Update colors in `tailwind.config.js`
- Replace logo in `Navbar.tsx` and `Footer.tsx`
- Update contact info in `ContactForm.tsx`

### Content
- Edit project data in `src/lib/data.ts`
- Update testimonials, pricing, skills, and process steps

### Contact Form
The contact form uses a simple simulation. To use a real form service:
1. Create an account on [Formspree](https://formspree.io) or similar
2. Update the form action in `ContactForm.tsx`

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** TypeScript

## License

MIT
