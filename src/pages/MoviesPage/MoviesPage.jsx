import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovie } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery || query) {
        const data = await fetchSearchMovie(searchQuery || query);
        setMovies(data);
      }
    };
    fetchData();
  }, [searchQuery, query]);

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
