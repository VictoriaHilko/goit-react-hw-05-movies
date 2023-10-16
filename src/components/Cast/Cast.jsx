import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "utils/movies-api";

export const Cast = () => {
    const [castDetails, setcastDetails] = useState(null);
    const { movieId } = useParams();
    const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        getMovieCredits(movieId).then(setcastDetails);
    }, [movieId]);

    if (!castDetails) {
        return null;
    }

    return (
        <ul>
      {castDetails.map(({id, profile_path, name, character}) => (
        <li key={id}>
            <img src={baseImgUrl.concat(profile_path)} alt={name} />
            <p>{name}</p>
            <p>{character}</p>
        </li>
      ))}
      </ul>
      );
};
