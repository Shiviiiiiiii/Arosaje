import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles: {

    },
    colors: {
        customColor: {
            100: "#d7e7c9",
            200: "#92C2C0",
            300: "#76B147",
        }
    },

    components: {

    },

});

export default extendTheme(Theme);