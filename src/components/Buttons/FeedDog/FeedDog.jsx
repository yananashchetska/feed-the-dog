import { useContext } from "react";
import { DogContext } from "../../../App";

export const FeedDog = () => {
  const [feed, setFeed] = useContext(DogContext);

  const feedHandler = () => {
    setFeed(!feed);

    if (!feed) {
      setTimeout(() => {
        setFeed(false);
      }, 2500);
    }
  };
  return <button onClick={() => feedHandler()}>Feed</button>;
};
