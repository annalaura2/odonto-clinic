import {
  Box,
  Container,
  Image,
  Flex,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as ReactLink} from "react-router-dom";

export function Footer() {
  return (
    <>
      <Box as={"footer"} bg={"#00071A"} color={"white"} p={5}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <Flex justify={'space-between'} gap={10} flexDirection={{ base: 'column', md: 'row' }}>
            <Stack spacing={6}>
              <Box as={ReactLink} to={"/"}>
                <Image
                  src="/svg/logo-light.svg"
                  alt="Logo Odonto Clinic"
                  maxW={"13rem"}
                />
              </Box>
              <Text fontSize={"sm"}>
                Copyright © {new Date().getFullYear()} Odonto Clinic
              </Text>
            </Stack>
            <Box display={"flex"} flexDirection={"row"} gap={40}>
            <Stack>
              <Link as={ReactLink} to={"#"}>Home</Link>
              <Link as={ReactLink} to={"#"}>Specialists</Link>
              <Link as={ReactLink} to={"#"}>Services</Link>
            </Stack> <Stack>
              <Link as={ReactLink} to={"#"}>Privacy policies</Link>
              <Link as={ReactLink} to={"#"}>Terms of use</Link>
            </Stack>
            </Box>            
          </Flex>
        </Container>
      </Box>
    </>
  );
}
