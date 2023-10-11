import css from './MoviesSearch.module.css';

export const MoviesSearch = ({onChange, onSubmit}) => {

    return (
        <div className={css.searchbar}>
            <form className={css.form} onSubmit={onSubmit}>
                <input
                    className={css.formInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search films or serials..."
                    onChange={onChange}
                />
                <button type="submit" className={css.searchButton}>
                    <svg fill="none" height="25" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line> </svg>
                </button>
            </form>
        </div>
    );
};