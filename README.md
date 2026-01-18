# Rana IT Agency — Premium Frontend (React + Vite)

This project is a **frontend-only**, premium, futuristic IT agency website with:
- Fixed **glassy navbar** + hover dropdown
- Hero with **Spline 3D** as main focus + overlay content
- Services section includes **Spline 3D (auto reload every N seconds)** + 2D icon services cards
- Robot Spline accent section (framed)
- Projects showcase with picture mock data + tags filter
- Reviews/Testimonials
- FAQ hover dropdown (auto expand on cursor)
- Multiple CTAs
- Fully responsive + aligned spacing system

## Run
```bash
npm install
npm run dev
```

## Customize
- Hero Spline: `src/sections/Hero.jsx`
- Services Spline reload seconds: `src/sections/ServicesSection.jsx` (prop `reloadEverySec`)
- Navbar items: `src/ui/mock.js`
- Mock data: `src/ui/mock.js`
- Logo: replace `src/assets/logo.svg`

> Note: you uploaded a `.ps` logo. Web-ready formats are SVG/PNG. Replace the logo file with your final exported asset.


✅ Client logo auto-converted from .ps to `src/assets/client-logo.png`.


## Performance notes
- 3D iframes mount only when near viewport (smoother).
- On mobile, 3D is scroll-friendly by default; tap "Interact" to move the 3D.
- Auto-reload is disabled by default to prevent jank.
