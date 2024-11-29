import { useEffect, useState } from "react";
import { fetchTrendingMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovie()
      .then(setMovies)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <MovieList movies={movies} />;
};
export default HomePage;
