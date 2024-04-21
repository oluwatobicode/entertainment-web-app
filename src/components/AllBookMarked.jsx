import { useMovies } from "../contexts/MoviesContext";
import "../styles/TrendingBox.css";
import "../styles/MovieBox.css";

function AllBookMarked() {
  const { filterdMovies, search } = useMovies();
  const bookmarked = filterdMovies.filter(
    (filterdMovies) => filterdMovies.isBookmarked === true
  );

  const moviesBookmarked = bookmarked.filter(
    (bookmarked) => bookmarked.category === "Movie"
  );

  const seriesBookmarked = bookmarked.filter(
    (bookmarked) => bookmarked.category === "TV Series"
  );

  if (moviesBookmarked.length < 0)
    return "BookMark is empty add a movie or a Tv series so you can watch it later!";

  return (
    <div>
      <div className="intro">
        <h1>
          {search.length > 0
            ? `Found ${moviesBookmarked.length} results for "${search}"`
            : "Bookmarked Movies"}
        </h1>
      </div>
      <div className="all-movies">
        <div className="all-movies">
          {moviesBookmarked.map((ele, index) => (
            <div className="regular-movies" key={index}>
              <div className="regular-movie-thumbnail">
                <img
                  src={ele.thumbnail.regular.large}
                  className="regular-movies-image"
                  alt={ele.title}
                />
              </div>

              <div className="regular-movie-desc">
                <ul className="regular-movie-list">
                  <li>{ele.year}</li>
                  <li>{ele.category}</li>
                  <li>{ele.rating}</li>
                </ul>
                <h3 className="regular-movie-title">{ele.title}</h3>
              </div>

              <button className="bookmark-icon">
                {ele.isBookmarked === false ? (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                      fill="#FFF"
                    />
                  </svg>
                )}
              </button>

              <div className="play">
                <div className="play-button">
                  <img src="/assets/icon-play.svg" alt="play button" />
                  <p>Play</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bookmarked tvseries */}
      <div className="intro">
        <h1>{search.length > 0 ? "" : "Bookmarked TV Series"}</h1>
      </div>
      <div className="all-movies">
        <div className="all-movies">
          {seriesBookmarked.map((ele, index) => (
            <div className="regular-movies" key={index}>
              <div className="regular-movie-thumbnail">
                <img
                  src={ele.thumbnail.regular.large}
                  className="regular-movies-image"
                  alt={ele.title}
                />
              </div>

              <div className="regular-movie-desc">
                <ul className="regular-movie-list">
                  <li>{ele.year}</li>
                  <li>{ele.category}</li>
                  <li>{ele.rating}</li>
                </ul>
                <h3 className="regular-movie-title">{ele.title}</h3>
              </div>

              <div className="bookmark-icon">
                {ele.isBookmarked === false ? (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                      fill="#FFF"
                    />
                  </svg>
                )}
              </div>

              <div className="play">
                <button className="play-button">
                  <img src="/assets/icon-play.svg" alt="play button" />
                  <p>Play</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBookMarked;
