import React, { useEffect, useState } from "react";
// import { useContext } from "react";
import "./App.css";
import { FeedDog } from "./components/Buttons/FeedDog";

export const DogContext = React.createContext();
const App = () => {
  const [feed, setFeed] = useState(false);

  useEffect(() => {
    let timer;

    if (feed) {
      timer = setTimeout(() => {
        setFeed(false);
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [feed]);

  return (
    <DogContext.Provider value={[feed, setFeed]}>
      <p>Your dog is: {feed ? " fed" : " hungry"}</p>
      <FeedDog />
    </DogContext.Provider>
  );
};

export default App;
