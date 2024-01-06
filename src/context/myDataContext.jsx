import { createContext, useState } from "react";
import { newFurnuture } from "../data";

export const NewProContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [newPro, setNewPro] = useState(newFurnuture);
  return (
    <NewProContext.Provider value={newPro}>{children}</NewProContext.Provider>
  );
};
