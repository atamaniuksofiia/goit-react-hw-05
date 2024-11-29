import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (movieId) {
      fetchMovieCredits(movieId)
        .then(setCast)
        .catch((err) => {
          console.error("Failed to load cast:", err);
        });
    }
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
