import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
/* When choosing between different types of components coming from 
different libraries, e.g. heading <h1> from HTML or the <Heading>
from Chakra, since we are building our app around Chakra, we want
to use as much as possible Chakra components to be consistent. */
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
