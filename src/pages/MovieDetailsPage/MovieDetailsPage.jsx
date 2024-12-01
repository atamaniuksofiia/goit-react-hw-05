import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || "/movies");

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
      <Link to={goBackLink.current}>Go back</Link>

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
