import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { NotFound } from "pages/NotFound/NotFound";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}/>
          <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>

    </>
  );
};