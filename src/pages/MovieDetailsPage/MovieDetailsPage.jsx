import { Suspense, useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = location.state?.from || "/movie";
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => {
        console.error("Failed to fetch movie details:", err.message);
      });
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;
  return (
    <>
      <button onClick={() => navigate(goBackLink)}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetailsPage;
