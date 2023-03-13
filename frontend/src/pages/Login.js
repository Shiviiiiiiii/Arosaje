import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Animation from "../styles/Animation";
import { Link } from "react-router-dom";
import { Container, Box, Flex, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";

const Login = () => {
    return (
        <Animation>
            <Container pt={50}>
                <Box>
                    <Center>
                        <Flex direction='column'>
                            <Center>
                                <Heading bgGradient='linear(to-l, customColor.100, customColor.200)' bgClip='text' fontSize='6xl' fontWeight='extrabold'>A RosaJe</Heading>
                            </Center>
                            <Heading pt={3}>Connectez-vous à votre compte</Heading>
                            <Center>
                                <Text pt={2} pb={6}>Vous n'avez pas de compte ? <Button variant='link' color='customColor.200'><Link to='/register'>Cliquez ici !</Link></Button></Text>
                            </Center>
                            <Box py={{ base: '0', sm: '8' }} px={{ base: '4', sm: '10' }} bg='whiteAlpha.100' boxShadow='2xl' borderRadius='lg'>
                                <form>
                                    <FormControl pb={6} isRequired>
                                        <FormLabel pb={2}>Username :</FormLabel>
                                        <Input/>

                                        <FormLabel pt={3} pb={2}>Mot de passe :</FormLabel>
                                        <Input type='password' />
                                    <Text pt={3} pb={6}><Button variant='link' color='customColor.200'><Link to='/passwod-recovery'>Mot de passe oublié ?</Link></Button></Text>
                                        <Center pb={3}>
                                            <Button type='submit' bg='customColor.100'>Se connecter</Button>
                                        </Center>
                                    </FormControl>
                                </form>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Container>
        </Animation>
    );
};

export default Login;