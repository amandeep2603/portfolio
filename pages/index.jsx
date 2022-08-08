import { Meta } from "../components/Meta";
import {
  Container,
  Text,
  Heading,
  VStack,
  Box,
  Grid,
  GridItem,
  chakra,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const ChakraHeading = chakra(motion.h1, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const ChakraText = chakra(motion.span, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default function Home() {
  const mytech = [
    "js",
    "react",
    "chakra",
    "next",
    "git",
    "django",
    "python",
    "postgres",
  ];

  return (
    <>
      <Meta
        description="Hello! I am Aman Deep. I am a full stack web developer. "
        keywords="portfolio , Web developer , Full stack Web dev, Next js , Python , React, Aman Deep"
      />

      <Box
        bgGradient="linear(to-b, black, black)"
        w="100%"
        p="0"
        m="0"
        zIndex="4"
        h="30vh"
        position="fixed"
        top="-20"
        left="0"
        style={{ filter: "blur(50px)" }}
      ></Box>
      <Box
        bgGradient="linear(to-b, black, black)"
        w="100%"
        p="0"
        m="0"
        zIndex="4"
        h="30vh"
        position="fixed"
        bottom="-20"
        left="0"
        style={{ filter: "blur(50px)" }}
      ></Box>

      <Container
        as="section"
        minW="100%"
        minH="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack minH="full">
          <ChakraHeading
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
          >
            Hello! I am{" "}
            <ChakraText
              bgGradient="linear(to-r, pink.500, pink.600, purple.600)"
              bgClip="text"
            >
              Aman Deep
            </ChakraText>
          </ChakraHeading>
          <ChakraHeading
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 2, delay: 1 }}
            fontWeight="medium"
            w="full"
            textAlign="center"
            fontSize={{ base: "sm", md: "lg" }}
          >
            I am a self taught
            <ChakraText
              p="2"
              bgGradient="linear(to-r, pink.500, pink.600, purple.600)"
            >
              Full Stack Web developer
            </ChakraText>
          </ChakraHeading>
          <VStack py="10">
            <ChakraText
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 2, delay: 2 }}
            >
              To know more , Keep Scrolling
            </ChakraText>
            <ChakraBox
              border="2px"
              borderColor="pink.500"
              w="5"
              h="10"
              rounded="full"
              px="0.5"
              py="1"
              display="flex"
              justifyContent="center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 2, delay: 2 }}
            >
              <motion.div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#FF0080",
                  borderRadius: "50%",
                }}
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",

                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
              />
            </ChakraBox>
          </VStack>
        </VStack>
      </Container>

      <Box
        as={motion.div}
        minW="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          as={motion.div}
          w={{ base: "90vw", md: "50vw" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
          viewport={{ once: false, root: 0.7 }}
        >
          <Text lineHeight="1.5" textAlign="center">
            Let me tell you more about myself. I am{" "}
            <Text as="span" color="pink.500" fontWeight="semibold">
              21 years old
            </Text>{" "}
            and I live in{" "}
            <Text as="span" color="pink.500" fontWeight="semibold">
              India
            </Text>{" "}
            . I have been pursuing my {" "}
            <Text as="span" color="pink.500" fontWeight="semibold">
              Bachelor Degree in Computer Applications.
            </Text> {" "}
            But I rarely go to college because I think I can learn more by not going to college and by exploring the real time computer lessons which colleges do not provide. Therefore, I do my programming stuffs at my home and am
            continuously upgrading myself.
          </Text>
        </VStack>
      </Box>
      <Container
        as={motion.section}
        minW="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          w={{ base: "50vw", md: "30vw" }}
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          }}
          viewport={{ once: false, root: 0.5 }}
        >
          <Text as={motion.p} textAlign="center">
            <Text
              as="span"
              color="pink.500"
              fontWeight="semibold"
              fontSize={{ base: "lg", md: "xl" }}
            >
              What is my tech stack??
            </Text>{" "}
            <br />
            Well, my primary focus on javascript and python ecosystem.
          </Text> {" "}
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", md: '"repeat(8,1fr)"' }}
            w="100%"
            gap="2"
          >
            {mytech.map((tech, index) => {
              return (
                <GridItem
                  as={motion.div}
                  position="relative"
                  w="100%"
                  h="16"
                  key={index}
                >
                  <Image
                    src={`/tech/${tech}.png`}
                    blurDataURL={`/tech/${tech}.png`}
                    objectFit="contain"
                    layout="fill"
                    placeholder="blur"
                    alt={tech}
                  />
                </GridItem>
              );
            })}
          </Grid>
        </VStack>
      </Container>
      <Container
        minW="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        viewport={{ once: false, root: 0.5 }}
      >
        <VStack w={{ base: "80vw", md: "50vw" }} my="2">
          <Text textAlign="center" fontSize={{base:"md",md:"lg"}} >
            Currently, I have one project to showcase.
            <br /> But soon will be uploaded to my portfolio
          </Text>
        </VStack>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          minW="25vw"
          gap="2"
        >
          <GridItem
            w="40"
            h="40"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            position="relative"
            bgColor="gray.800"
          ></GridItem>
            <Link href="https://github.com/amandeep2603/pokedex">
          <GridItem
            w="40"
            h="40"
            bgColor="gray.800"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rounded="lg"
          >
              <Box position="relative" w="20" h="20" cursor="pointer">
                <Image
                  src="/project/pokeball.png"
                  blurDataURL="/project/pokeball.png"
                  objectFit="contain"
                  layout="fill"
                  placeholder="blur"
                />
              </Box>
              <Text fontWeight="semibold" fontSize="lg">PokeDex App</Text>
          </GridItem>
            </Link>
          <GridItem
            w="40"
            h="40"
            bgColor="gray.800"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rounded="lg"
          ></GridItem>
        </Grid>
      </Container>
      <Container
        as="section"
        minW="100%"
        minH="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          as={motion.h1}
          fontSize="lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
        >
          Get in Touch
        </Text>

        <Box
          as={motion.div}
          w={{base:"80",md:"96"}}
          p="1"
          bgGradient="linear(to-r, pink.600, purple.700)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, transition: { delay: 0.4 } }}
        >
          <Link href="mailto:deep.aman6174@gmail.com">
            <Box
              as={motion.button}
              w="full"
              py="4"
              bgColor="white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, transition: { delay: 0.4 } }}
              cursor="pointer"
            >
              <Heading
                bgGradient="linear(to-r, pink.600, purple.600)"
                bgClip="text"
                size="md"
              >
                Mail Me
              </Heading>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
