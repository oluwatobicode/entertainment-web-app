import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesContext } from "./contexts/MoviesContext";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import BookMarked from "./pages/BookMarked";
import "./index.css";

function App() {
  return (
    <MoviesContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<TvSeries />} />
          <Route path="bookmarked" element={<BookMarked />} />
        </Routes>
      </BrowserRouter>
    </MoviesContext>
  );
}

export default App;
