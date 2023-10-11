import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
// import css from './MovieDetails.module.css';
import { MovieCard } from "components/MovieCard/MovieCard";
import { getMovieDetails } from "utils/movies-api";


export const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();

    const location = useLocation();
    const backLocation = location.state?.from ?? '/';

    useEffect(() => {
        getMovieDetails(movieId).then(setMovieDetails);
      }, [movieId]);

    if (!movieDetails) {
        return null;
    }


    return (
        <>
        <NavLink to={backLocation}>Go back</NavLink>
        <MovieCard movie={movieDetails} />
        {/* <div>
        <NavLink to={'cast'} state={{ from: backLocation }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: backLocation }}>
          Reviews
        </NavLink>
      </div> */}
        <Suspense>
        <Outlet />
      </Suspense>
        </>
    );
};

