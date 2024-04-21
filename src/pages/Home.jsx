import Search from "../components/Search";
import TrendingBox from "../components/TrendingBox";
import Loader from "../components/Loader";
import { useMovies } from "../contexts/MoviesContext";

function Home() {
  const { isLoading } = useMovies();
  return (
    <div className="home">
      <Search message="Search for movies or TV series" />
      {isLoading ? <Loader /> : <TrendingBox />}
    </div>
  );
}

export default Home;
