import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'utils/movies-api';
import css from './MovieDetails.module.css';


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
        <button className={css.backButton}>← Go back</button>
      </NavLink>
      <MovieCard movie={movieDetails} />

      <div className={css.detailsContainer}>
      <h3 className={css.detailsTitle}>Additional information </h3>
      <div className={css.listDetails}>
        <NavLink className={css.detailsLink} to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink className={css.detailsLink} to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      </div>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};