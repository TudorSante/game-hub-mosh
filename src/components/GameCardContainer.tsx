import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/* We "box" each card into a container of preset dimensions,
shape, etc. We give as children to this component the cards
(both the ones to be rendered and the skeletons) at the
component that is responsible of their rendering. */
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
