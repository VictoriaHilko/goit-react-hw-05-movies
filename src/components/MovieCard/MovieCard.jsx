// import css from './MovieCard.module.css';
import noPoster from '../../images/noPoster.jpg';

export const MovieCard = ({ movie }) => {

    const { poster_path, title, release_date, vote_average, overview, genres } = movie;

    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    const releaseDate = release_date.slice(0, 4);
    const genresList = genres.map(genre => genre.name).join(', ');

    return (
        <div>
            <img src={poster_path ? baseImgUrl.concat(poster_path) : noPoster} alt="{title}" width="350" />
            <div>
                <h3>
                    {title} <p>({releaseDate})</p>
                </h3>
                <p>
                    User score: <span>{vote_average}</span>
                </p>
                <p>
                    Overview: <span>{overview}</span>
                </p>
                <p>
                    Genres: <span>{genresList}</span>
                </p>
            </div>
        </div>
    );
};
