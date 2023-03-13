import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Illustration from "../assets/Cactus lover-bro.svg";
import Animation from "../styles/Animation";

const Home = () => {
    return (
        <Animation>
            <Box pt={6}>
                <Center>
                    <Flex flexDirection='column'>
                        <Heading>Welcome to Arosaje!</Heading>
                        <Heading size='md'>Arosaje is a plant watering app that helps you keep your plants alive.</Heading>
                        <Box>
                            <Button bg='customColor.100' size='md' mt='10px'>Get Started</Button>
                        </Box>
                    </Flex>
                    <Image src={Illustration} boxSize='500px' alt="home_illu" />
                </Center>
            </Box>
        </Animation>
    );
};

export default Home;