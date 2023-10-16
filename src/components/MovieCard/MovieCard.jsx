import css from './MovieCard.module.css';
import noPoster from '../../images/noPoster.jpg';

export const MovieCard = ({ movie }) => {

    const { poster_path, title, release_date, vote_average, overview, genres } = movie;

    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    const releaseDate = release_date.slice(0, 4);
    const genresList = genres.map(genre => genre.name).join(', ');

    return (
        <div className={css.movieContainer}>
            <img className={css.movieImg} src={poster_path ? baseImgUrl.concat(poster_path) : noPoster} alt="{title}" width="350" />
            <div className={css.movieDetailsContainer}>
                <h3 className={css.movieTitle}>
                    {title} <p>({releaseDate})</p>
                </h3>
                <p className={css.movieSubTitle}>
                    User score: <span className={css.subTitleContent}>{vote_average}</span>
                </p>
                <p className={css.movieSubTitle}>
                    Overview: <span className={css.subTitleContent}>{overview}</span>
                </p>
                <p className={css.movieSubTitle}>
                    Genres: <span className={css.subTitleContent}>{genresList}</span>
                </p>
            </div>
        </div>
    );
};
