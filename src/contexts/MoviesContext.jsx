/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const MoviesProvider = createContext();

function MoviesContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const filterdMovies = movies.filter((movies) =>
    movies.title.toLowerCase().includes(search.toLowerCase())
  );

  function onAddBookMark(id) {
    setMovies((movies) =>
      movies.map((fl) =>
        fl.id === id ? { ...fl, isBookmarked: !fl.isBookmarked } : fl
      )
    );
  }

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await fetch("http://localhost:9000/movies");
        const res = await data.json();
        setMovies(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <MoviesProvider.Provider
      value={{
        isLoading,
        search,
        setSearch,
        movies,
        filterdMovies,
        onAddBookMark,
      }}
    >
      {children}
    </MoviesProvider.Provider>
  );
}

function useMovies() {
  const contexts = useContext(MoviesProvider);
  if (contexts === undefined)
    throw new Error("It is not in the contexts provider");
  return contexts;
}

export { MoviesContext, useMovies };
