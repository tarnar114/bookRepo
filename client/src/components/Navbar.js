import { Heading, Box, Container, Flex, Stack, Link,Text } from "@chakra-ui/react";
import ThemeToggle from "./theme-toggle";
import {  Link as ReactRouterLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <Box as="nav" w="100%" position="fixed" wrap="wrap">
      <Container display="flex" maxW="container.md" p={1}>
        <Flex align="center" mr={6}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Bookmark
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          spacing={3}
          mt={{ base: 4, md: 0 }}
        >
          <Link as={ReactRouterLink} to="/">
            <Text fontSize="md" fontWeight={"semibold"}>
              Add Book
            </Text>
          </Link>

          
          <Link as={ReactRouterLink} to="/list">
            <Text fontSize="md" fontWeight={"semibold"}>
              List
            </Text>
          </Link>
        </Stack>

        <Box align="right" flex={1}>
          <ThemeToggle />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
