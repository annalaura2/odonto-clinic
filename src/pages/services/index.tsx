import { Box, Center, Container, Image, Stack, Text, chakra } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import StatsWithIcons from "../../components/stats";

export default function Services() {
  return (
    <>
      <Helmet title="Services" />
      <Box bg={"#3B72FF"}>
      <Container color="white" maxW="5xl" px={{ base: 6, md: 3 }} pt={24}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Stack
            direction="column"
            spacing={6}
            justifyContent="center"
            maxW="480px"
          >
            <chakra.h1
              fontSize="5xl"
              lineHeight={1}
              fontWeight="bold"
              textAlign="left"
            >
              Services
            </chakra.h1>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
            >
              We are not satisfied with the average. Our goal is to serve you
              and treat you with judicious methods. Clinically, this has
              repercussions on the predictability and high durability of the
              work performed.
            </Text>
          </Stack>
          <Center ml={{ base: 0, md: 5 }}>
            <Image
              w="200px"
              minW={{ base: "auto", md: "30rem" }}
              objectFit="cover"
              src={`/svg/Services - SVG.svg`}
              rounded="md"
            />
          </Center>
        </Stack>
      </Container>
      </Box>
   
     <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
     <StatsWithIcons/>
     </Box>
    </>
  );
}
