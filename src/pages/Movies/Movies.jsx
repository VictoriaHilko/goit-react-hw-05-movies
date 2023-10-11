import { MoviesList } from "components/MoviesList/MoviesList";
import { MoviesSearch } from "components/MoviesSearch/MoviesSearch";
import { Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "utils/movies-api";

export const Movies = () => {
    
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('query') ?? '';
        if (!query) {
          return;
        }
        getMovies(query).then(setMovies);
      }, [searchParams]);


      const onChange = event => {
        setQuery(event.target.value);
      };
    
      const onSubmit = event => {
        event.preventDefault();

        setSearchParams(query !== '' ? { query } : {});

        if (query.trim() === '') {
            setMovies([]);
            Notify.info('Please enter some value to search');
        }
      };

    return (
        <>
            <MoviesSearch
                onSubmit={onSubmit}
                onChange={onChange}
            />
            <MoviesList movies={movies}/>
        </>
    );
};
