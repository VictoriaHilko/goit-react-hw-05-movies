// import css from './MovieCard.module.css';
import noPoster from '../../images/noPoster.jpg';

export const MovieCard = ({ movie}) => {

    const { original_name, release_date, vote_average, overview, genres, poster_path } = movie;

    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div>
        <img src={poster_path ? baseImgUrl.concat(poster_path) : noPoster} alt={original_name} />
          <h3>{original_name}</h3>
          <p>release_date: {release_date}</p>
          <p>vote_average: {vote_average}</p>
          <p>overview: {overview}</p>
          <p>genres: {genres}</p>
        </div>
    );
};

