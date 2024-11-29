import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovie } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    fetchSearchMovie(query)
      .then(setMovies)
      .catch((error) => console.error("Error fetching movies:", error));
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};
export default MoviesPage;
