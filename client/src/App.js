import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";

function App() {
  return (
    <Box as="main" pb={8}>
      <Navbar />
      <Container maxW={"container.md"} pt={20}>
        <Router />
      </Container>
    </Box>
  );
}

export default App;
