import { useContext } from "react";
import { DogContext } from "../../../App";

export const FeedDog = () => {
  const [feed, setFeed] = useContext(DogContext);

  return <button onClick={() => setFeed(!feed)}>Feed</button>;
};
