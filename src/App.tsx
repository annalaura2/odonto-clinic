import { ChakraProvider } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import customTheme from "./theme";

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="Odonto Clinic - %s" />
      <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
