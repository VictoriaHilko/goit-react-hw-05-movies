import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "utils/movies-api";
import noActor from '../../images/noActor.jpg';
import css from './Cast.module.css';

export const Cast = () => {
    const [castDetails, setCastDetails] = useState(null);
    const { movieId } = useParams();
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        getMovieCredits(movieId).then(setCastDetails);
    }, [movieId]);

    if (!castDetails) {
        return null;
    }

    return (
        <ul className={css.castContainer}>
            {castDetails.length === 0 &&
                <p>We don`t have any cast information for this movie.</p>}
      {castDetails.map(({id, profile_path, name, character}) => (
        <li className={css.castListItem} key={id}>
            
            <img className={css.castImage} src={profile_path ? baseImgUrl.concat(profile_path) : noActor} alt={name} />
            <p className={css.actorName}>{name}</p>
            <p className={css.actorCharacter}>{character}</p>
        </li>
      ))}
      </ul>
      );
};
