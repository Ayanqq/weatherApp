import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                customGrey: '#D9D9D9',
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            padding: {
                'global': '80px 64px'
            },
            dropShadow: {
                custom: '10px 10px 4px rgba(0, 0, 0, 0.5)'
            }
        },
    },
    plugins: [],
} satisfies Config;
