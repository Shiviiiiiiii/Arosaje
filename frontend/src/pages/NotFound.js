import { Center, Image } from "@chakra-ui/react";
import React from "react";
import Error from "../assets/404.svg";
import Animation from "../styles/Animation";

const NotFound = () => {
    return (
        <Animation>
            <div>
                <Center>
                    <Image src={Error} boxSize='500px' alt="404" />
                </Center>
            </div>
        </Animation>
    );
};

export default NotFound;