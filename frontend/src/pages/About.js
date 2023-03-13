import { Heading } from "@chakra-ui/react";
import React from "react";
import Animation from "../styles/Animation";
import { Box, Center } from "@chakra-ui/react";

const About = () => {
    return (
        <Animation>
            <Box>
                <Center>
                    <Heading>About</Heading>
                </Center>
            </Box>
        </Animation>
    );
};

export default About;