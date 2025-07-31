/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                barca: {
                    blue: '#004d98',
                    red: '#a50044',
                },
                madrid: {
                    white: '#ffffff',
                    gold: '#ffd700',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backdropBlur: {
                xs: '2px',
            },
            dropShadow: {
                'glow': [
                    '0 0px 20px rgba(255, 255, 255, 0.35)',
                    '0 0px 65px rgba(255, 255, 255, 0.2)'
                ]
            }
        },
    },
    plugins: [],
}
