// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
//   theme: {
//     extend: {
//       // fontFamily: {
//       //   body: ['Inter'],
//       //   poppins: ['Poppins'],
//       // },
//       colors: {
//         primary: "var(--color-primary)",
//         secondary: "#525256",
//         defaultBlack: "#191919", 
//         gray: {
//           "01": "#666666",
//           "02": "#878787",
//           "03": "#9F9F9F", 
//           "05": "#E8E8E8",
//           "06": "#F3F3F3",
//         },
//         special: {
//           "bg": "rgba(210, 210, 210, 0.25)",
//           "bg2": "rgba(255, 255, 255, 0.7)",
//           "bg3": "rgba(255, 255, 255, 0.08)",
//           "mainBg": "#F4F5F7",
//           "green": "#E73D1C",
//           "red": "#4DAF6E"
//         } 
//       }
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Menambahkan font-family jika diperlukan
      fontFamily: {
        body: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)", // Warna utama yang dinamis sesuai tema
        secondary: "#525256", // Warna sekunder
        defaultBlack: "#191919", // Warna hitam standar
        gray: {
          "01": "#666666",
          "02": "#878787",
          "03": "#9F9F9F",
          "05": "#E8E8E8",
          "06": "#F3F3F3",
        },
        special: {
          bg: "rgba(210, 210, 210, 0.25)",
          bg2: "rgba(255, 255, 255, 0.7)",
          bg3: "rgba(255, 255, 255, 0.08)",
          mainBg: "#F4F5F7",
          green: "#E73D1C",
          red: "#4DAF6E",
        },
      },
      animation: {
        // Animasi tambahan untuk loader
        "spin-slow": "spin 2.5s linear infinite", // Animasi rotasi lambat
        "chase-spin": "sk-chase 2.5s linear infinite", // Animasi chase spinner
        "chase-dot": "sk-chase-dot 2.0s ease-in-out infinite", // Dot animasi
      },
      keyframes: {
        // Keyframe untuk animasi chase spinner
        "sk-chase": {
          "100%": { transform: "rotate(360deg)" },
        },
        "sk-chase-dot": {
          "80%, 100%": { transform: "rotate(360deg)" },
        },
        "sk-chase-dot-before": {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(0.4)" },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      translate: ["peer-checked"], // Varian untuk peer-checked (berguna untuk toggle switch)
    },
  },
};
