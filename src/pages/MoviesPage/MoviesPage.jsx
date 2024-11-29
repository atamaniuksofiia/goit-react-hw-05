import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovie } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const queryInUrl = searchParams.get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSearchMovie(queryInUrl);
      setMovies(data);
    };

    if (queryInUrl) {
      fetchData();
    }
  }, [queryInUrl]);

  const handleSearch = () => {
    if (query) {
      setSearchParams({ query });
    }
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};
export default MoviesPage;
