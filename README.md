# PetLux 🐾✨

> Silicon Valley's Premier Luxury Pet Experience

A high-end luxury pet services website built with React, TypeScript, and Tailwind CSS. PetLux is the upscale sister company to [Bay Pet Ventures](https://baypetventures.com), offering premium services for discerning pet owners.

![PetLux Preview](https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1200&auto=format&fit=crop)

## ✨ Features

- **Luxury Design**: Navy/white/gold color scheme with elegant typography
- **Parallax Scrolling**: Background images smoothly transition as you scroll
- **Premium Services**: Spa, gourmet dining, holistic wellness, CCPDT training, photography, nature retreats
- **Responsive**: Fully optimized for mobile, tablet, and desktop
- **Modern Stack**: React 19 + TypeScript + Vite 7 + Tailwind CSS v4

---

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/BeniRabi/PetLux.git

# Or clone via SSH
git clone git@github.com:BeniRabi/PetLux.git

# Navigate to the project directory
cd PetLux
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The site will open automatically in your browser at **http://localhost:5174**

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🗂 Project Structure

```
PetLux/
├── public/
│   └── favicon.svg          # Crown + paw logo
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation with scroll effects
│   │   ├── Footer.tsx       # Site footer with links
│   │   └── Layout.tsx       # Page layout wrapper
│   ├── pages/
│   │   ├── HomePage.tsx     # Hero, services, pricing, testimonials
│   │   ├── ServicesPage.tsx # Full service catalog
│   │   ├── AboutPage.tsx    # Company story & team
│   │   └── ContactPage.tsx  # Contact form & info
│   ├── App.tsx              # Route definitions
│   ├── main.tsx             # App entry point
│   └── index.css            # Tailwind + custom styles
├── index.html               # HTML template with SEO meta tags
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # You are here!
```

---

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy 950 | `#0a1628` | Primary background |
| Navy 900 | `#102a43` | Cards, sections |
| Gold 400 | `#D4AF37` | Accents, buttons, highlights |
| Ivory 50 | `#fefdfb` | Text, light elements |

### Typography

- **Headings**: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (elegant serif)
- **Body**: [Montserrat](https://fonts.google.com/specimen/Montserrat) (clean sans-serif)

---

## 💰 Featured Offering

**Weekend Resort Retreat**: ~~$1,499~~ **$999** (first-time guest special)

Includes:
- Private suite with plush bedding
- Daily spa treatment & pawdicure
- Gourmet chef-prepared meals
- Morning yoga & meditation
- Professional photography session
- Exclusive nature hike
- Personal concierge service 24/7

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.x | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type safety |
| [Vite](https://vitejs.dev/) | 7.x | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styling |
| [React Router](https://reactrouter.com/) | 7.x | Client-side routing |

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this for your own projects!

---

## 🔗 Related

- [Bay Pet Ventures](https://baypetventures.com) - Our adventure-focused sister company
- [Doggie Adventures](https://doggieadventures.dog) - Inspiration for parallax design

---

<p align="center">
  Made with 💛 for pets who deserve the best
</p>

