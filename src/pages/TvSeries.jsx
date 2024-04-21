import AllSeries from "../components/AllSeries";
import Loader from "../components/Loader";
import Search from "../components/Search";
import { useMovies } from "../contexts/MoviesContext";

function TvSeries() {
  const { isLoading } = useMovies();
  return (
    <div className="series">
      <Search message="Search for TV series" />
      {isLoading ? <Loader /> : <AllSeries />}
    </div>
  );
}

export default TvSeries;

/*
1.Filter the array that are tv-series and let them show here
2.Series that are bookmarked initially should have the bookmarked indicator
3. be able to bookmark series

*/
