/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ca80",
          secondary: "#7BA4EF",
          "base-100": "#eaeae8",
          error: "#E03E29",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
