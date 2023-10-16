import axios from "axios";


const searchParams = new URLSearchParams({
    api_key: 'bd5c07398187641bfc99831ff9d6a9f6',
    language: 'en-US',
    include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMoviesTrending = async () => {
    const { data } = await axios.get(`/trending/all/week?${searchParams}`);
    return data.results;
};


export const getMovies = async (name) => {
    const { data } = await axios.get(`/search/movie?${searchParams}&query=${name}`);
  return data.results;
};


export const getMovieDetails = async (id) => {
    const { data } = await axios.get(`/movie/${id}?${searchParams}`);
    return data;
  };


export const getMovieCredits = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
    return data.cast;
};

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
    return data.results;
};
