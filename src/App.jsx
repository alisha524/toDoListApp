import React from "react";
import { useState } from "react";
import { ColorSchemeProvider } from "@mantine/core";
import MainPage from "./components/MainPage";
import { MantineProvider, Container } from "@mantine/core";

function App() {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }} withNormalizeCSS>
        <Container>
          <MainPage />
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;
