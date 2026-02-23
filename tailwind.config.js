/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4F2A83",     // Dark purple
                secondary: "#FFCD00",   // Yellow
                accent: "#D400A3",      // Pink/Magenta
                background: "#F9F9FB",  // Light gray/white
                surface: "#FFFFFF",
                textMain: "#1A1A1A",
                textMuted: "#6B7280"
            },
            fontFamily: {
                sans: ['"Inter"', "sans-serif"],
                heading: ['"Outfit"', "sans-serif"],
            },
            animation: {
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
