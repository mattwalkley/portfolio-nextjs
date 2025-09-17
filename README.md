# Portfolio Site

A modern, professional portfolio website built with Next.js 15, designed for product designers and design leaders. Features a clean black/white/gray design aesthetic with slate undertones and fun CMYK squiggle hover animations.

## Features

- **Home Page**: Introduction, about information, services, and portfolio teaser
- **Portfolio Page**: Grid layout showcasing case studies with Figma links and password protection
- **Writing Page**: Blog area for thought leadership content with category filtering
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Modern Animations**: Fun CMYK squiggle hover effects on buttons
- **Professional Aesthetic**: Clean, sophisticated design perfect for design professionals

## Design System

- **Colors**: Black/white/gray palette with slate undertones
- **Typography**: Inter font family for clean, readable text
- **Spacing**: Consistent spacing system using CSS custom properties
- **Animations**: Smooth transitions and hover effects
- **Buttons**: Black buttons with white text, featuring CMYK squiggle hover animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: CSS with custom properties and utility classes
- **Fonts**: Inter from Google Fonts
- **Deployment**: Ready for Vercel deployment

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── writing/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## Customization

### Colors
Update the color palette in `globals.css` by modifying the CSS custom properties in the `:root` selector.

### Content
- Update case studies in `src/app/portfolio/page.tsx`
- Modify blog posts in `src/app/writing/page.tsx`
- Edit personal information in `src/app/page.tsx`

### Styling
The design system uses utility classes and CSS custom properties. Modify `globals.css` to adjust spacing, typography, and other design tokens.

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

MIT License - feel free to use this template for your own portfolio.
