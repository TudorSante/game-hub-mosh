import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  /* On mobile devices (small -> sm) we want only 1 game card per row.
  On larger devices: tables - 2 columns, laptops 3-5 games/row. This is
  the meaning of { sm: 1, md: 2, lg: 3, xl: 5 }.*/
  return (
    <>
      {error && <Text color="red.400">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
