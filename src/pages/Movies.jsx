import AllMovies from "../components/AllMovies";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { useMovies } from "../contexts/MoviesContext";

function Movies() {
  const { isLoading } = useMovies();
  return (
    <div className="movies">
      <Search message="Search for movies" />
      {isLoading ? <Loader /> : <AllMovies />}
    </div>
  );
}

export default Movies;
