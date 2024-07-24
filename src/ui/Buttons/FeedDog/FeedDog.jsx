/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DogContext } from "../../../App";

import "./FeedDog.scss";

export const FeedDog = ({ index }) => {
  // const [feed, setFeed] = useState(false);
  const { feedHandler} = useContext(DogContext);

  return (
    <button
      className="Dog-section__button feed-button "
      onClick={() => feedHandler(index)}
    >
      Feed
    </button>
  );
};
