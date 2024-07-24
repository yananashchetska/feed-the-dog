import { useContext } from "react";
import { DogContext } from "../../../App";

export const FeedDog = () => {
  const [feed, setFeed] = useContext(DogContext);

  const feedHandler = () => {
    if (!feed) {
      setFeed(true);
    }
  };
  return <button onClick={() => feedHandler()}>Feed</button>;
};
