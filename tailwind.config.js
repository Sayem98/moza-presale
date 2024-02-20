module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Raleway: "Raleway",
        Roboto: "Roboto",
        Cairo: "Cairo",
      },
    },
    colors: {
      "Cetacean-Blue": "#000C3C",
      "Cobalt-Blue": "#0151A6",
      "Raisin-Black": "#222222",
      White: "#FFFFFF",
      Red: "#FF0000",
      "Bright-Gray": "#EDEDED",
      "Spanish-Gray": "#9E9E9E",
      "Silver-Sand": "rgba(196, 196, 196, 0.2)",
      "Chinese-Silver": "rgba(201, 201, 201, 0.5)",
      Black: "#868a8f",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
  ],
};
