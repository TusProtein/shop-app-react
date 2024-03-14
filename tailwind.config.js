/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
