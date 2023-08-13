import { Text } from "@chakra-ui/react";
import useGames from "./hooks/useGames";

/* Our component has knowledge of the api endpoint ("/games"), the
type of HTTP req we are going to send and in the future it will also
know about the cancelling req using the abort controller. This is not
wanted into our components, as we should implement the separation of 
concerns in our proj.
Silver line: Our components should be primarily responsible for returning
markup and handling user interractions at a high level. 
To avoid this issue, we shoul create a custom effect hook in another file,
i.e. move the entire logic on HTTP calls and state variables inside a hook.
Obs.: Hooks are not necessarily for sharing functionality across different
components, we can also use them to separate concerns and make our code
more modular and usable.
*/
const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="red.400">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
