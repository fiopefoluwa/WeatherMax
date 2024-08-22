/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#31A9ED',
                'grey-050': '#7E839A',
                'card-dark': '#090A10',
                'card-border': '#0E111A',
            },
        },
    },
    plugins: [],
};
