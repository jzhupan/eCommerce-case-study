import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      fontBlack: "#1a202c",
      primaryColor: "#B88E2F",
      fontWhite: "#ffffff",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  fontWeights: {
    medium: 500,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
