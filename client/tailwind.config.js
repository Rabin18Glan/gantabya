/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: ['media','class', "class"], // Supports both media and class-based dark mode
	theme: {
    	extend: {
    		fontFamily: {
    			serif: [
    				'Playfair Display',
    				'Merriweather',
    				'serif'
    			],
    			body: [
    				'Lora',
    				'Libre Baskerville',
    				'serif'
    			]
    		},
    		fontSize: {
    			xs: '0.8rem',
    			sm: '0.96rem',
    			base: '1rem',
    			lg: '1.2rem',
    			xl: '1.44rem',
    			'2xl': '1.728rem',
    			'3xl': '2.073rem',
    			'4xl': '2.488rem',
    			'5xl': '2.986rem'
    		},
    		textShadow: {
    			sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
    			default: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    			lg: '3px 3px 6px rgba(0, 0, 0, 0.25)',
    			none: 'none'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				background: 'hsl(var(--primary-background))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))',
    				background: 'hsl(var(--secondary-background))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))',
    				background: 'hsl(var(--accent-background))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))',
    				background: 'hsl(var(--destructive-background))'
    			},
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
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
	plugins: [
	  function({ addUtilities }) {
		const newUtilities = {
		  '.text-shadow-sm': {
			textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
		  },
		  '.text-shadow': {
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
		  },
		  '.text-shadow-lg': {
			textShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
		  },
		  '.text-shadow-none': {
			textShadow: 'none',
		  },
		};
		addUtilities(newUtilities, ['responsive', 'hover']);
	  },
	  require("tailwindcss-animate"),
	],
  };
  