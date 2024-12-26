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
            }
        },
    },
    plugins: [],
} satisfies Config;
