/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "Arial"],
        body: ["ui-sans-serif", "system-ui", "Inter", "Arial"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 60px rgba(0,0,0,0.45)",
        glow2: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 90px rgba(0,0,0,0.55)"
      },
      backdropBlur: {
        xl: "24px"
      }
    }
  },
  plugins: []
}
