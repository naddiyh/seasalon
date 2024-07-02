// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-yellow":
          "linear-gradient(112deg, rgba(174,134,37,1) 5%, rgba(247,239,138,1) 35%, rgba(210,172,71,1) 70%, rgba(237,201,103,1) 100%)",
      },
      boxShadow: {
        shadow: "0px 0px 28px -1px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
