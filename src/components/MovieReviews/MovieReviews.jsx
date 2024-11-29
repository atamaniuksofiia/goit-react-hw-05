import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>— {review.author}</p>
          </li>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </ul>
  );
};

export default MovieReviews;
