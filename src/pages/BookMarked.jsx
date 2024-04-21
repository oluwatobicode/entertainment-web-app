import AllBookMarked from "../components/AllBookMarked";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { useMovies } from "../contexts/MoviesContext";

function BookMarked() {
  const { isLoading } = useMovies();
  return (
    <div className="bookmark">
      <Search message="Search for bookmarked shows" />
      {isLoading ? <Loader /> : <AllBookMarked />}
    </div>
  );
}

export default BookMarked;
