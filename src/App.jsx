import React, { useEffect, useState, useRef } from "react";
import { FeedDog } from "./ui/Buttons/FeedDog";
import "./App.scss";
// import { preview } from "vite";

export const DogContext = React.createContext();

const App = () => {
  const [dogs, setDogs] = useState([false, false, false]);
  // const [gameOver, setGameOver] = useState(false);
  const timers = useRef([]);

  const addDogsHandler = () => {
    setDogs([...dogs, false]);
  };

  const feedHandler = (index) => {
    setDogs((prevDogs) => {
      const newDogs = [...prevDogs];
      newDogs[index] = true;
      return newDogs;
    });

    if (timers.current[index]) {
      clearTimeout(timers.current[index]);
    }

    timers.current[index] = setTimeout(() => {
      setDogs((prevDogs) => {
        const newDogs = [...prevDogs];
        newDogs[index] = false;
        return newDogs;
      });
    }, 2000);
  };

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  // if (gameOver) {
  //   return <p>Game is Over! All tour dogs are hungry!!!</p>;
  // }

  return (
    <DogContext.Provider value={{ dogs, feedHandler }}>
      <div className="App">
        {dogs.map((dog, index) => {
          return (
            <div className="Dog-section" key={index}>
              <p>Your dog is: {dog ? " fed" : " hungry"}</p>
              <FeedDog index={index} />
            </div>
          );
        })}

        <button className="add-button" onClick={addDogsHandler}>
          Add dog
        </button>
      </div>
    </DogContext.Provider>
  );
};

export default App;
