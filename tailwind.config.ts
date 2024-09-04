import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'slack-purple-gradient': 'linear-gradient(to bottom, #4A154B, #3E1241, #321037, #290E2E, #200C25, #16091B)',
                'complementary-blue-gradient': 'linear-gradient(to bottom, #0033A0, #002C8C, #00246E, #001D57, #001746, #000F35)',
				'mint-gradient': 'linear-gradient(to bottom, #98FF98, #7BCC7B, #5B8A5B, #3F6F3F)',
				 'grey-gradient': 'linear-gradient(to bottom,#16181b, #212529, #343a40)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                slackPurple: {
                    DEFAULT: '#4A154B',          // Base color
                    dark1: '#3E1241',           // Slightly darker
                    dark2: '#321037',           // Darker
                    dark3: '#290E2E',           // Even darker
                    dark4: '#200C25',           // Much darker
                    dark5: '#16091B'            // Very dark
                },
                complementaryBlue: {
                    DEFAULT: '#0033A0',          // Base color
                    dark1: '#002C8C',           // Slightly darker
                    dark2: '#00246E',           // Darker
                    dark3: '#001D57',           // Even darker
                    dark4: '#001746',           // Much darker
                    dark5: '#000F35'            // Very dark
                },
				mint: {
                    DEFAULT: '#98FF98',
                    dark1: '#7BCC7B',
                    dark2: '#5B8A5B',
                    dark3: '#3F6F3F'
                },
				grey: {
                    DEFAULT: '#6c757d',       // Base grey
                    light: '#e9ecef',         // Light grey
                    lighter: '#f8f9fa',       // Very light grey
                    dark: '#343a40',          // Dark grey
                    darker: '#212529',        // Even darker grey
                    darkest: '#16181b'        // Very dark grey
                },
            },

			
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
