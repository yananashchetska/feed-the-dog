import React, { useState } from "react";
// import { useContext } from "react";
import "./App.css";
import { FeedDog } from "./components/Buttons/FeedDog";

export const DogContext = React.createContext();
const App = () => {
  
  const [feed, setFeed] = useState(false);


  return (
    <DogContext.Provider
      value={[feed, setFeed]}
    >
      <p>Your dog is: {feed ? ' fed' : ' hungry'}</p>
      <FeedDog />
    </DogContext.Provider>
  )
};

export default App;
