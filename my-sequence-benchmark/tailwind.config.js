/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*/.{js,ts,jsx,tsx,mdx}", // For Next.js pages
    "./components/**/*/.{js,ts,jsx,tsx,mdx}", // For React components
    "./app/**/*/.{js,ts,jsx,tsx,mdx}", // For Next.js app directory
    "./public/**/*/.html",  // If you use HTML files in the public directory
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true,   // Ensures Tailwind resets are applied
    layerUtilities: true, // Ensures @layer utilities is processed
  },
  plugins: [],
}

