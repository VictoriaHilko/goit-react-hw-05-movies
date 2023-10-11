import { NavLink } from "react-router-dom";
import css from './MoviesList.module.css';
import noPoster from '../../images/noPoster.jpg';

export const MoviesList = ({movies}) => {

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
      <ul className={css.moviesListContainer}>
      {movies.map(({id, title, original_name, poster_path}) => (
        <li className={css.moviesListItem} key={id}>
          <NavLink className={css.movieLink} to={`/movies/${id}`}>
          <img className={css.movieImg} src={poster_path ? baseImgUrl.concat(poster_path) : noPoster} alt={title} />
          
          <div className={css.movieContainer}>
          <h3 className={css.movieTitle}>{title ?? original_name}</h3>
          </div>
          </NavLink>
        </li>
      ))}
      </ul>
    );
};
