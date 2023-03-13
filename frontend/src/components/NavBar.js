import React from "react";
import { Flex, Heading, Button, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ToggleColor from "./ToggleColor";

const NavBar = () => {
    return (
        <Box pt={6} pl={6} pr={6} pb={6}>
            <Flex>
                <Heading size="md" pt={2} mr={6} variant='unstyled'>
                    <Link to='/'>A Rosaje</Link>
                </Heading>
                <Button pt={0.5} mr={4} variant='link'>
                    <Link to="/about">About</Link>
                </Button>
                <Button pt={0.5} mr={4} variant='link'>
                    <Link to="/shop">Shop</Link>
                </Button>
                <Spacer />
                <Button mr={4} bg='customColor.200'>
                    <Link to="/login">Login</Link>
                </Button>
                <Button mr={4} bg='customColor.100'>
                    <Link to="/register">Register</Link>
                </Button>
                <ToggleColor />
            </Flex>
        </Box>
    );
};

export default NavBar;