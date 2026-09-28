/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b"
        },
        border: "#e2e8f0",
        accent: "#ff8a3d", // Le orange d'INNOVATELQ
        card: {
          DEFAULT: "#ffffff",
          dark: "#0f172a"
        },
        primary: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc"
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #ff8a3d, #ea580c)',
        'gradient-dark': 'linear-gradient(to bottom, #0f172a, #020617)',
      },
      boxShadow: {
        'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'brand': '0 10px 20px -5px rgba(255, 138, 61, 0.3)',
      },
      animation: {
        'bubble-drift': 'bubbleDrift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        bubbleDrift: {
          '0%': { transform: 'translateY(0px) scale(1)' },
          '100%': { transform: 'translateY(-30px) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
