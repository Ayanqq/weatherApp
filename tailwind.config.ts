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
            fontWeight:{
              poppins: 'Poppins',
            },
            colors: {
                customGrey: '#D9D9D9',
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            padding: {
                'global': '0',
                'container': '63px 80px'
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(117deg, rgba(255,255,255,1) 0%, rgba(16,142,226,1) 100%)',
            },
            width: {
                'container': '100%'
            },
            margin: {
                'global': '0',
                'container': '0 auto'
            },
            dropShadow: {
                custom: '10px 10px 4px rgba(0, 0, 0, 0.5)'
            }
        },
    },
    plugins: [],
} satisfies Config;
