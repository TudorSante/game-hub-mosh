import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

/* We try to improve the user experience by showing a so called skeleton
until the actual card is rendered. This is good since fetching the games 
takes time and until the data for rendering is fully available, we 
want to render a "loading" card instead. Also, to have the same card 
widths and form we need to apply the same css styling for both game cards
and skeleton cards. */
const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
