/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                Dela: "Dela, cursive",
                DM700: "DMSans Bold, cursive",
                DM500: "DMSans Medium, cursive",
                Inter500: "Inter Medium, cursive",
                Inter600: "Inter Semi Bold, cursive",
                Inter700: "Inter Bold, cursive",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/hero-bg.svg')",
                "hero-pattern-v": "url('/src/assets/hero-bg-v.svg')",
            },
        },
    },
    plugins: [],
};
