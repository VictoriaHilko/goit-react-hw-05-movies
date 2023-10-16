import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'utils/movies-api';


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';


  return (
    <>
      <NavLink to={backLink}>
        <button>Go back</button>
      </NavLink>
      <MovieCard movie={movieDetails} />

      <div>
        <NavLink to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};