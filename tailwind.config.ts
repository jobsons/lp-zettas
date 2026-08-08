import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ["class"],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			navy: {
  				'950': '#050b14',
  				'900': '#0a1424',
  				'800': '#122036',
  				'700': '#1a2e4a',
  			},
  			graphite: {
  				'950': '#0f172a',
  				'900': '#1e293b',
  				'800': '#334155',
  				'700': '#475569',
  				'600': '#64748b',
  				'500': '#94a3b8',
  				'400': '#94a3b8',
  				'300': '#cbd5e1',
  				'200': '#e2e8f0',
  				'100': '#f1f5f9',
  				'50': '#f8fafc',
  			},
			cyan: {
				'300': '#7dd3fc',
				'400': '#38bdf8',
				'500': '#06b6d4',
				'600': '#0284c7',
			},
			violet: {
				'400': '#a78bfa',
				'500': '#818cf8',
				'600': '#6366f1',
			},
  			emerald: {
  				'400': '#34d399',
  				'500': '#10b981',
  				'600': '#059669',
  			},
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

