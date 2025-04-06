# Lifelight Landing Page Design Guidelines


## Color System

### Primary Colors
- `primary-color`: #FF7400 - Main orange color
- `primary-light`: #F9A946 - Light orange
- `rose-pink`: #FE2C58 - Rose pink color
- `rose-pink-light`: #F3AAB1 - Light rose pink
- `mint-blue`: #00B2BC - Mint blue color
- `mint-blue-light`: #00C7BD - Light mint blue
- `space-purple`: #7963E1 - Space purple color
- `space-purple-light`: #A9AFEB - Light space purple
- `coffee-brown`: #A2845E - Coffee brown color
- `coffee-brown-light`: #AC8E68 - Light coffee brown

### Neutral Colors
- `bg-gray`: #F7F7F8 - Background gray
- `bg-light-blue`: #F2F2F6 - Light blue background
- `divider`: #BFBFBF - Divider color
- `dark-gray`: #A2A2A2 - Dark gray
- `text-secondary`: #7F7F7F - Secondary text color
- `text-primary`: #000000 - Primary text color

## Typography

### Font Families
- Primary font: "SF Pro", -apple-system, BlinkMacSystemFont, etc.
- English serif: "New York", Georgia, Cambria, etc.
- Chinese serif: "Source Han Serif CN", "Noto Serif SC", serif

### Text Styles
- Heading 1: 3.5rem, bold, 1.2 line height
- Heading 2: 2.5rem, bold, 1.2 line height
- Heading 3: 1.75rem, bold, 1.2 line height
- Heading 4: 1.25rem, bold, 1.2 line height
- Paragraph: 1rem, 1.6 line height, 400 weight

## Component Guidelines

### Buttons

#### Basic Button Structure
```html
<button className="btn btn-primary">Button Text</button>
<Link href="#link" className="btn btn-secondary">Button Text</Link>
```

#### Button Variants
- `btn-primary`: Orange gradient, white text
- `btn-secondary`: White background, orange border and text
- `btn-rose`: Rose pink gradient, white text
- `btn-mint`: Mint blue gradient, white text
- `btn-purple`: Purple gradient, white text
- `btn-coffee`: Coffee brown gradient, white text

### Cards

#### Basic Card Structure
```html
<div className="card">
  <!-- Card content -->
</div>
```

#### Feature Cards
```html
<div className="feature-card rounded-large overflow-hidden shadow-card hover:shadow-card-hover">
  <div className="bg-gradient-primary h-2"></div>
  <div className="p-5 bg-white relative">
    <!-- Card content -->
  </div>
</div>
```

### Glass Effect Components
```html
<div className="glass-effect p-4 rounded-xl shadow-xl">
  <!-- Component content -->
</div>
```

### Gradient Text
```html
<h3 className="text-gradient-primary">Gradient Text</h3>
```

Available text gradients:
- `text-gradient-primary`
- `text-gradient-rose`
- `text-gradient-mint`
- `text-gradient-purple`
- `text-gradient-coffee`

### Badges

```html
<span className="feature-badge badge-primary">Badge Text</span>
```

Badge variants:
- `badge-primary` - Orange
- `badge-rose` - Rose pink
- `badge-mint` - Mint blue
- `badge-purple` - Purple
- `badge-coffee` - Coffee brown

## Layout Patterns

### Container
All sections should use the container class for consistent width:
```html
<div className="container">
  <!-- Content -->
</div>
```

### Section Structure
```html
<section id="section-name" className="section bg-white relative overflow-hidden">
  <div className="container relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-6xl font-bold mb-4">Section Title</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Section description</p>
    </div>
    
    <!-- Section main content -->
  </div>
  
  <!-- Background decorations -->
  <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-lg transform -translate-x-1/3"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-mint opacity-5 rounded-full blur-lg"></div>
</section>
```

### Grid Layouts
For responsive grid layouts:
```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

## Animations and Effects

### Animation Classes
- `fade-in`: Fade in animation
- `slide-up`: Slide up animation
- `slide-in-right`: Slide in from right
- `slide-in-left`: Slide in from left
- `animate-float`: Floating animation (Tailwind)
- `animate-bounce-gentle`: Gentle bouncing animation (Tailwind)
- `animate-pulse-slow`: Slow pulse animation (Tailwind)

### Background Patterns
Typical background decorations:
```html
<!-- Gradient background overlay -->
<div className="absolute inset-0 bg-gradient-to-br from-primary-color/20 to-primary-light/15 -z-10"></div>

<!-- Animated floating blobs -->
<div className="absolute top-20 right-[10%] w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-40 left-[5%] w-80 h-80 bg-rose-pink-light/30 rounded-full blur-3xl animate-float delay-700"></div>

<!-- Decorative pattern -->
<div className="absolute inset-0 opacity-5 z-0" style={{
  backgroundImage: "url(\"pattern-svg-url\")",
  backgroundSize: "60px 60px"
}}></div>
```

## Image Handling

### Optimized Image Component
```html
<OptimizedImage
  src="/optimized/image.webp"
  alt="Image description"
  width={800}
  height={600}
  className="rounded-[20px] shadow-2xl"
  priority={true}
  quality={85}
/>
```

## Responsive Design

### Responsive Strategy
- Desktop-first approach
- Breakpoints:
  - lg: 1024px (laptops and larger)
  - md: 768px (tablets)
  - sm: 640px (mobile)

### Responsive Classes
- `md:hidden` / `hidden md:block`: Show/hide based on breakpoint
- `md:col-span-2`: Control column span at different breakpoints
- `md:grid-cols-2`: Control grid columns at different breakpoints

## Header and Footer

### Header
- Sticky header with transparent to white background transition
- Desktop navigation with dropdowns for Products, Users, Docs
- Mobile hamburger menu with accordion sections
- Language switcher in top right

### Footer
- Dark background with 4-column layout
- Company logo in the top left
- Navigation links organized by category
- Copyright information in the bottom
- Background image with low opacity

## Internationalization

All text content should use the translation system:
```jsx
import { useTranslation } from 'next-i18next';

// Inside component
const { t } = useTranslation('common');

// Usage
<h2>{t('section.title')}</h2>
```