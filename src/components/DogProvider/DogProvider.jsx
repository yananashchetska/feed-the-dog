/* eslint-disable react/prop-types */
// import { Children } from "react";
// import { useState, createContext } from "react";

// const DogContext = createContext();

// export const DogProvider = ({ children }) => {
  
//   const [dogs, setDogs] = useState([]);

//   const addDog = (name) => {
//     setDogs([...dogs, name]);
//   };

//   const removeDog = (name) => {
//     setDogs(
//       dogs.filter(dog => dog !== name)
//     )
//   }

//   return (
//     <DogContext.Provider
//       value={{dogs, addDog, removeDog}}
//     >
//       {children}
//     </DogContext.Provider>
//   )
// };
