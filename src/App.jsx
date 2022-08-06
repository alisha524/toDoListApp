import React from "react";
import { useState } from "react";
import { ColorSchemeProvider, ColorScheme } from "@mantine/core";
import MainPage from "./components/MainPage";
import { MantineProvider, Container } from "@mantine/core";

function App() {
  const [colorScheme, setColorScheme] = useState < ColorScheme > "light";
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <div>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Container>
            <MainPage />
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}
export default App;
