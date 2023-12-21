import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myPrimary: "#00805C",
        mySecondary: "#004D37",
        myBlack: "#262626",
        myWhite: "#F5F5F5",
      },
      backgroundImage: (theme) => ({
        default: "url('/Images/background.jpg')",
      }),
    },
  },
  plugins: [],
};
export default config;
