import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ToggleColor = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button colorScheme='yellow' onClick={() => toggleColorMode()}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};

export default ToggleColor;