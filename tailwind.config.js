/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./sections/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B0E11",
                secondary: "#151A21",
                gray: "#2C3645",
                teal: "#00D1B2",
                red: "#FD4D4D",
            },
        },
    },
};
