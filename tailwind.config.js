/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          deep: "#050505",
          card: "#111111",
          hover: "#181818",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        gold: {
          DEFAULT: "#C89B3C",
          light: "#E0B85A",
          dark: "#A37A24",
          glass: "rgba(200, 155, 60, 0.1)",
        },
        premium: {
          white: "#F5F5F5",
          gray: "#888888",
        }
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["'Inter Tight'", "sans-serif"],
      },
      backgroundImage: {
        'noise': "url('/assets/noise.svg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
