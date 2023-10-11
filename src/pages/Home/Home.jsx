import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { getMoviesTrending } from "utils/movies-api";
import css from './Home.module.css';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesTrending().then(setMovies);
      }, []);


      return (
        <>
        <h1 className={css.homeTitle}>Tranding today</h1>
        <MoviesList movies={movies}/>
        </>
      );
};