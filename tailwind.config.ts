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
  				'950': '#071626',
  				'900': '#0C2A4A',
  				'800': '#15385d',
  				'700': '#1e4772',
  			},
  			graphite: {
  				'950': '#111827',
  				'900': '#1f2937',
  				'800': '#2A3E55',
  				'700': '#374151',
  				'600': '#4b5563',
  				'500': '#6b7280',
  				'400': '#9ca3af',
  				'300': '#d1d5db',
  				'200': '#e5e7eb',
  				'100': '#f3f4f6',
  				'50': '#f9fafb',
  			},
			cyan: {
				'400': '#22d3ee',
				'500': '#06b6d4',
				'600': '#0891b2',
			},
			violet: {
				'400': '#a78bfa',
				'500': '#8b5cf6',
				'600': '#7c3aed',
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
