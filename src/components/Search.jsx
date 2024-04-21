/* eslint-disable react/prop-types */
import "../styles/search.css";
import { useMovies } from "../contexts/MoviesContext";

function Search({ message }) {
  const { search, setSearch } = useMovies();

  return (
    <div className="search">
      <div className="search-icon">
        <img src="assets/icon-search.svg" alt="search-icon" />
      </div>
      <input
        className="search-bar"
        value={search}
        placeholder={message}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
