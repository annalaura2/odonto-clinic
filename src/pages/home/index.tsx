import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeroSection from "../../components/hero";
import StatsWithIcons from "../../components/stats";
import cardsData from "../../data/cards.json";
import CardComponent from "../../components/card-info";
import Testimonials from "../../components/testimonials";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Box bg={"#3B72FF"} w={"full"}>
        <HeroSection />
      </Box>
      <SimpleGrid
        mt={"-7rem"}
        as={Container}
        maxW="4xl"
        spacing={9}
        columns={[1, null, 3]}
      >
        {cardsData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            content={card.content}
            icon={card.icon}
            boxShadow={card.boxShadow}
          />
        ))}
      </SimpleGrid>
      <Box mt={20}>
        <Heading textAlign={"center"}>Services</Heading>
        <StatsWithIcons />
      </Box>
      <Container maxW="5xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          {" "}
          <Center>
            <Image
              w="100%"
              h="100%"
              minW={{ base: "auto", md: "30rem" }}
              objectFit="cover"
              src={`/svg/Specialists - SVG.svg`}
              rounded="md"
              maxW={300}
              fallback={<Skeleton />}
            />
          </Center>
          <Flex
            justify={"center"}
            align={"center"}
            px={{ base: 6, md: 3 }}
            py={5}
          >
            <Stack
              direction="column"
              spacing={6}
              justifyContent="center"
              maxW="480px"
            >
              <Heading
                as={"h2"}
                fontSize="3xl"
                lineHeight={1}
                fontWeight="bold"
                textAlign="left"
              >
                Specialists
              </Heading>
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
              <Button
                bg={"#3B72FF"}
                color={"white"}
                maxW={"fit-content"}
                rounded={"md"}
                p={4}
                _hover={{
                  bg: "green.300",
                }}
              >
                take a look
              </Button>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <Testimonials />
      <AspectRatio ratio={15 / 4} m={2}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>
    </>
  );
}
