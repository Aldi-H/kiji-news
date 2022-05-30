import "./App.css";
import { Box, ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" p={3}>
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Home />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
