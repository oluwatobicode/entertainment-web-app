import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesContext } from "./contexts/MoviesContext";

const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const BookMarked = lazy(() => import("./pages/BookMarked"));

import "./index.css";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader";
import CodingNinja from "./components/CodingNinja";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MoviesContext>
        <BrowserRouter>
          <div className="app">
            <SideBar />
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="series" element={<TvSeries />} />
              <Route path="bookmarked" element={<BookMarked />} />
            </Routes>
          </div>
        </BrowserRouter>
        <CodingNinja />
      </MoviesContext>
    </Suspense>
  );
}

export default App;
