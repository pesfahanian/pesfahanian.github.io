/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    light: "#6CD0FF",
                    mid: "#576182",
                    dark: "#1C2E4C",
                    drm: "#0B0E11",
                },
                green: {
                    drm: "#00D1B2",
                    light: "#1FC5A8",
                },
                gray: "#151A21",
                red: "#FD4D4D",
            },
        },
    },
    plugins: [],
};
