import type {Config} from 'tailwindcss';
import {blackA, mauve, violet} from '@radix-ui/colors';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                ...blackA,
                ...mauve,
                ...violet
            },
            keyframes: {
                slideUpAndFade: {
                    from: {opacity: '0', transform: 'translateY(2px)'},
                    to: {opacity: '1', transform: 'translateY(0)'},
                },
                slideRightAndFade: {
                    from: {opacity: '0', transform: 'translateX(-2px)'},
                    to: {opacity: '1', transform: 'translateX(0)'},
                },
                slideDownAndFade: {
                    from: {opacity: '0', transform: 'translateY(-2px)'},
                    to: {opacity: '1', transform: 'translateY(0)'},
                },
                slideLeftAndFade: {
                    from: {opacity: '0', transform: 'translateX(2px)'},
                    to: {opacity: '1', transform: 'translateX(0)'},
                },
            },
            animation: {
                slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
}
export default config
