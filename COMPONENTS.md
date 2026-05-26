# Component Documentation

## Page Structure

### Root Layout (`app/layout.tsx`)
- Wraps entire application
- Includes Navigation and Footer
- Sets up metadata (title, description, OG tags)
- Global CSS imports

### Home Page (`app/page.tsx`)
- Server component marked with 'use client'
- Imports and renders all sections
- Maintains scroll-based navigation

---

## Section Components

### Hero Section (`components/sections/Hero.tsx`)
**Purpose:** First impression, profile introduction
**Key Elements:**
- Large heading with gradient text
- Professional profile photo with glow effect
- Social media follow buttons
- Bio text and CTA button
- Background typography decoration
- Framer Motion animations

**Props:** None (self-contained)
**Animations:** 
- Fade-in with stagger on elements
- Float animation on profile image
- Smooth reveal on scroll

---

### About Section (`components/sections/About.tsx`)
**Purpose:** Detailed information about designer
**Key Elements:**
- Profile photo on the left
- Detailed text description
- Statistics cards with counters
- "Read More" button
- Hover effects on stat cards

**Props:** None (self-contained)
**Child Components:**
- `StatCounter` (animated number counter)

**Animations:**
- Slide from left for image
- Slide from right for text
- Staggered animation for stat cards
- Counter animations on scroll

---

### Portfolio Section (`components/sections/Portfolio.tsx`)
**Purpose:** Showcase of completed projects
**Key Elements:**
- Grid of 6 project cards
- Responsive layout (3 columns desktop)
- Project images with hover zoom
- Category and year badges
- Project tags/labels

**Props:** None (self-contained)
**Child Components:**
- `PortfolioCard` (reusable project card)

**Animations:**
- Staggered card appearance
- Image zoom on hover
- Overlay reveal on hover
- Smooth scroll reveal

---

### Services Section (`components/sections/Services.tsx`)
**Purpose:** List of services offered
**Key Elements:**
- 6 service cards in grid
- Icon for each service
- Service description
- Feature checklist
- "Learn More" link

**Props:** None (self-contained)
**Child Components:**
- `ServiceCard` (reusable service card)

**Animations:**
- Staggered card appearance
- Icon scale on hover
- Background gradient shift
- Feature items fade-in

---

### Testimonials Section (`components/sections/Testimonials.tsx`)
**Purpose:** Client feedback and social proof
**Key Elements:**
- 3 testimonial cards with star ratings
- Client photo, name, role
- Quote text formatting
- Featured testimonial card
- Large client photo

**Props:** None (self-contained)
**Child Components:**
- `TestimonialCard` (reusable testimonial)

**Animations:**
- Staggered card appearance
- Star rating animations
- Smooth scroll reveal
- Card elevation on hover

---

### CTA Section (`components/sections/CTA.tsx`)
**Purpose:** Final call-to-action
**Key Elements:**
- Large heading with gradient
- Descriptive text
- Primary and outline buttons
- Contact information (email, phone, location)
- Background gradient effects

**Props:** None (self-contained)
**Animations:**
- Fade and slide on scroll
- Staggered element appearance
- Button hover effects

---

## UI Components (Reusable)

### PortfolioCard (`components/ui/PortfolioCard.tsx`)
**Purpose:** Individual project card display
**Props:**
```typescript
interface Project {
  id: number
  title: string
  category: string
  year: number
  image: string
  tags: string[]
}

interface PortfolioCardProps {
  project: Project
}
```

**Features:**
- Image with zoom on hover
- Year badge overlay
- Project info below image
- Tag labels
- Arrow icon overlay on hover

**Animations:**
- Image scale on hover
- Smooth shadow transition
- Arrow fade-in on hover
- Card elevation on hover

---

### ServiceCard (`components/ui/ServiceCard.tsx`)
**Purpose:** Individual service display
**Props:**
```typescript
interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}

interface ServiceCardProps {
  service: Service
}
```

**Features:**
- Large emoji icon
- Service title and description
- Feature checklist with checkmarks
- "Learn More" link
- Background gradient on hover

**Animations:**
- Icon scale and rotate on hover
- Background gradient fade-in
- Feature items stagger animation
- Card elevation on hover

---

### TestimonialCard (`components/ui/TestimonialCard.tsx`)
**Purpose:** Individual testimonial display
**Props:**
```typescript
interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  image: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}
```

**Features:**
- Star rating display
- Quote with decorative quote mark
- Author photo, name, and role
- Divider line
- Border on hover

**Animations:**
- Star scale animation (staggered)
- Card elevation on hover
- Smooth transitions

---

### StatCounter (`components/ui/StatCounter.tsx`)
**Purpose:** Animated number counter for statistics
**Props:**
```typescript
interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
}
```

**Features:**
- Animated count-up from 0 to target
- Optional prefix/suffix
- Triggered on scroll into view
- Uses intersection observer

**Animations:**
- Smooth count-up animation
- 2-second duration
- Smooth timing curve

---

## Layout Components

### Navigation (`components/Navigation.tsx`)
**Purpose:** Main navigation bar with scroll detection
**Features:**
- Fixed position at top
- Scroll background transition
- Navigation links to all sections
- Get in touch CTA button
- Mobile menu button
- Active link highlighting

**Animations:**
- Smooth background transition on scroll
- Button scale on hover
- Link text color transition

**Scroll Detection:**
- Tracks window scroll position
- Updates background at 50px threshold
- Updates glass effect appearance

---

### Footer (`components/Footer.tsx`)
**Purpose:** Website footer with links and info
**Features:**
- Brand name and description
- Navigation links
- Services list
- Social media links
- Copyright information
- Terms and policy links

**Layout:**
- 4-column grid on desktop
- Responsive on mobile
- Top divider line
- Dark background (gray-900)

---

## Styling System

### Global Styles (`app/globals.css`)
**Utilities:**
- `.btn-premium` - Base button styling
- `.btn-primary` - Primary blue button
- `.btn-outline` - Outline button variant
- `.gradient-text` - Blue gradient text
- `.card-shadow` - Soft shadow effect
- `.premium-shadow` - Large premium shadow
- `.glass-effect` - Glassmorphism effect

**Features:**
- Smooth scrolling
- Custom scrollbar styling
- Selection styling
- Image optimization
- Link transitions

---

## Data Structures

### Portfolio Projects
```typescript
{
  id: number
  title: string
  category: string
  year: number
  image: string
  tags: string[]
}
```

### Services
```typescript
{
  id: number
  title: string
  description: string
  icon: string
  features: string[]
}
```

### Testimonials
```typescript
{
  id: number
  quote: string
  author: string
  role: string
  image: string
  rating: number
}
```

### Statistics
```typescript
{
  value: number
  suffix: string
  label: string
}
```

---

## Animation Patterns Used

### 1. Scroll-Triggered Animations
```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
```

### 2. Staggered Children
```typescript
variants={containerVariants}
container: {
  staggerChildren: 0.1,
  delayChildren: 0.2,
}
```

### 3. Hover Effects
```typescript
whileHover={{ scale: 1.05, y: -5 }}
transition={{ duration: 0.3 }}
```

### 4. Float Animation (Keyframes)
```typescript
animate={{ y: [0, -20, 0] }}
transition={{ duration: 4, repeat: Infinity }}
```

---

## Performance Considerations

- Images use Next.js Image component with optimization
- Lazy loading enabled for scroll-revealed content
- Animation performance: GPU-accelerated transforms
- No layout shifts due to proper spacing
- Optimized bundle: 131 kB initial load

---

## Browser Compatibility

All components tested and working on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Customization Tips

1. **Add New Section:** Create component in `components/sections/`, import in `app/page.tsx`
2. **Change Colors:** Update `tailwind.config.js` theme colors
3. **Modify Typography:** Update font sizes and weights in config
4. **Add Projects:** Edit data array in `Portfolio.tsx`
5. **Change Animations:** Modify Framer Motion variants in components

