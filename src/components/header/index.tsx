import React from "react";
import {
  chakra,
  Flex,
  HStack,
  VisuallyHidden,
  useColorModeValue,
  ButtonGroup,
  Button,
  Image,
  Box,
  Link,
  CloseButton,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <chakra.header
    shadow="md"
    transition="all 0.5s ease-in-out"
    pos="fixed"
    top="0"
    zIndex="modal"
    w="full"
    px={{ base: 2, sm: 4 }}
    py={4}
    mb={10}
    css={{
      backdropFilter: "saturate(180%) blur(5px)",
      backgroundColor: useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      ),
    }}
  >
    {children}
  </chakra.header>
);

export default function NavHero() {
  const mobileNav = useDisclosure();

  return (
    <>
      <Header>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          as="nav"
        >
          <Flex>
            <VisuallyHidden>Logo</VisuallyHidden>
            <Box as={ReactLink} to="/">
              <Image src="/svg/Logo.svg" alt="Logo Odonto Clinic" maxW={"10rem"} />
            </Box>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            {/* <DesktopNav /> */}
            <HStack
              spacing={5}
              mr={5}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link as={ReactLink} to={"/"}>
                Home
              </Link>
              <Link as={ReactLink} to="/specialists">
                Specialists
              </Link>
              <Link as={ReactLink} to="/services">
                Services
              </Link>
            </HStack>
            <ButtonGroup>
              <Button bg="blue.300">Contact</Button>
            </ButtonGroup>
            {/* <MobileNav /> */}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                boxShadow={"none"}
                bg={useColorModeValue("gray.50", "#464460")}
                _hover={{ bg: useColorModeValue("gray.50", "#464460") }}
                color={useColorModeValue("gray.800", "white")}
                onClick={mobileNav.onOpen}
                icon={<AiOutlineMenu />}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={useColorModeValue("white", "#1a202cd1")}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                <Link as={ReactLink} to={"/"}>
                  Home
                </Link>
                <Link as={ReactLink} to="/specialists">
                  Specialists
                </Link>
                <Link as={ReactLink} to="/services">
                  Services
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Header>
    </>
  );
}
