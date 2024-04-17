/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const MoviesProvider = createContext();

const x = "hi";

function MoviesContext({ children }) {
  return (
    <MoviesProvider.Provider value={{ x }}>{children}</MoviesProvider.Provider>
  );
}

function useMovies() {
  const contexts = useContext(MoviesProvider);
  if (contexts === undefined)
    throw new Error("It is not in the contexts provider");
  return contexts;
}

export { MoviesContext, useMovies };
