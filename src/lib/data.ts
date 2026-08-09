export const services = [
  {
    id: 'web-design',
    title: 'Website Design',
    description:
      'Custom, visually stunning designs that capture your brand essence and engage your audience from the first click.',
    icon: 'Palette',
    features: [
      'Custom UI/UX Design',
      'Brand Identity Integration',
      'Responsive Layout',
      'Prototyping & Wireframing',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description:
      'High-converting landing pages designed to turn visitors into customers with strategic call-to-actions.',
    icon: 'Layout',
    features: [
      'Conversion-Optimized',
      'A/B Testing Ready',
      'Fast Loading',
      'Mobile-First Design',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description:
      'Full-featured online stores with secure payment integration, inventory management, and seamless checkout.',
    icon: 'ShoppingCart',
    features: [
      'Secure Payments',
      'Inventory Management',
      'Product Showcase',
      'Order Tracking',
    ],
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description:
      'Transform your outdated website into a modern, high-performing digital asset that drives results.',
    icon: 'RefreshCw',
    features: [
      'Modern UI Update',
      'Performance Optimization',
      'SEO Improvements',
      'Content Strategy',
    ],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description:
      'Custom web applications built with cutting-edge technology to solve your unique business challenges.',
    icon: 'Code',
    features: [
      'Custom Functionality',
      'API Integration',
      'Database Design',
      'Real-time Features',
    ],
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description:
      'Data-driven SEO strategies to boost your visibility and rank higher in search engine results.',
    icon: 'Search',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Performance Tracking',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Luxe Fashion Store',
    category: 'e-commerce',
    description: 'A premium e-commerce platform for a high-end fashion brand with seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'TechFlow Dashboard',
    category: 'web-apps',
    description: 'A SaaS analytics dashboard with real-time data visualization and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'GreenLife Organic',
    category: 'landing-page',
    description: 'A beautiful landing page for an organic food delivery service with subscription model.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'FitPro Studio',
    category: 'web-design',
    description: 'A modern website for a fitness studio with class booking and trainer profiles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Artisan Coffee Co.',
    category: 'e-commerce',
    description: 'An online coffee shop with subscription boxes and bean sourcing stories.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Shopify', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Wanderlust Travel',
    category: 'landing-page',
    description: 'An inspiring travel agency website with destination guides and booking integration.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    tags: ['React', 'Maps API', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, Luxe Fashion',
    content:
      'WebCraft Studio transformed our online presence completely. The new e-commerce site increased our sales by 150% in just three months. Absolutely phenomenal work!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, TechFlow',
    content:
      'The SaaS dashboard they built for us is incredibly intuitive. Our users love it, and the performance improvements are noticeable. Best investment we made.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Owner, GreenLife Organic',
    content:
      'From concept to launch, the entire process was smooth and professional. The landing page converts like crazy and looks absolutely beautiful.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    role: 'Director, FitPro Studio',
    content:
      'They understood our vision perfectly and delivered a website that truly represents our brand. The booking system works flawlessly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
  },
];

export const pricing = [
  {
    name: 'Basic',
    price: 499,
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      'Contact form',
      'Social media links',
      '1 month support',
    ],
    popular: false,
  },
  {
    name: 'Standard',
    price: 999,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Advanced SEO',
      'CMS integration',
      'Analytics setup',
      'E-commerce ready (up to 50 products)',
      '3 months support',
      'Performance optimization',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 1999,
    description: 'For businesses that need the best',
    features: [
      'Unlimited pages',
      'Premium custom design',
      'Full SEO strategy',
      'Advanced e-commerce',
      'Custom integrations',
      'Priority support',
      '6 months support',
      'A/B testing setup',
      'Conversion optimization',
    ],
    popular: false,
  },
];

export const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'DevOps / CI/CD', level: 75 },
];

export const processSteps = [
  {
    step: 1,
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, target audience, and design preferences through a detailed consultation.',
  },
  {
    step: 2,
    title: 'Strategy & Planning',
    description:
      'I create a comprehensive project plan, sitemap, and wireframes to establish a solid foundation.',
  },
  {
    step: 3,
    title: 'Design',
    description:
      'Beautiful, modern designs are crafted that align with your brand identity and engage your audience.',
  },
  {
    step: 4,
    title: 'Development',
    description:
      'Clean, efficient code brings the design to life with responsive layouts and smooth interactions.',
  },
  {
    step: 5,
    title: 'Testing & Launch',
    description:
      'Thorough testing across devices and browsers ensures everything works perfectly before launch.',
  },
  {
    step: 6,
    title: 'Support & Growth',
    description:
      'Post-launch support and ongoing optimization to help your website continue to perform and grow.',
  },
];
