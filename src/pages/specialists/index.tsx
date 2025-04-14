import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

interface SpecialistsAttributes {
  name: string;
  image: string;
}

const specialists: SpecialistsAttributes[] = [
  {
    name: "Dr. James",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Olivia",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Ryan",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Specialists() {
  return (
    <>
      <Helmet title="Specialists" />
      <Container color="#3B72FF" maxW="5xl" px={{ base: 6, md: 3 }} pt={24}>
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
              Specialists
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
              src={`/svg/Specialists - SVG.svg`}
              rounded="md"
            />
          </Center>
        </Stack>
      </Container>
      <Flex
        maxW="4xl"
        gap={4}
        w="full"
        alignItems="center"
        justifyContent="center"
        as={Container}
        mb={6}
        flexDirection={{ base: "column", md: "row" }}
      >
        {specialists.map((data, index) => (
          <Box
            w="xs"
            key={index}
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            shadow="lg"
            rounded="30px"
            overflow="hidden"
            mx="auto"
            m={1}
          >
            <AspectRatio maxW="400px" ratio={2 / 2}>
              <Image
                w="full"
                h={56}
                m={1}
                borderTopLeftRadius={7}
                borderTopRightRadius={7}
                fit="cover"
                src={data.image}
                alt={data.name}
              />
            </AspectRatio>

            <Box
              m={2}
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              textAlign="center"
            >
              <Text>{data.name}</Text>
              <chakra.button color={"white"} bg={"blue.400"} p={1} rounded={"md"}>View details</chakra.button>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}
