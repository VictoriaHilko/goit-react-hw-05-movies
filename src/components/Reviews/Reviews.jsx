import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "utils/movies-api";
import css from './Reviews.module.css';

export const Reviews = () => {

    const [review, setReview] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then(setReview);
    }, [movieId]);

    if (!review) {
        return null;
    }

    return (
        <ul className={css.reviewContainer}>
            {review.length === 0 &&
                <p>We don`t have any reviews for this movie.</p>}
            {review.map(({ id, content, author }) => (
                <li className={css.reviewListItem} key={id}>
                    <p className={css.reviewAuthor}>{author}</p>
                    <p className={css.reviewContent}>{content}</p>
                </li>
            ))}
        </ul>
    );
};
