import {Button, Center, Heading} from "@chakra-ui/react";
import React from "react";
import Animation from "../styles/Animation";
import {Link} from "react-router-dom";

const Shop = () => {
  return (
    <Animation>
      <div>
        <Center>
          <Heading>Shop</Heading>
          <Button>
            <Link to={'/chat'}>Chatbox</Link>
          </Button>
        </Center>
      </div>
    </Animation>
  );
}

export default Shop;