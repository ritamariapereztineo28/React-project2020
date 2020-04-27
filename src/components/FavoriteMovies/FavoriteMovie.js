import React, { useContext } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Context from "../../components/Context";

const FavoriteMovies = () => {
  const movieContext = useContext(Context);

  return (
    <div className="selections-favorite-movie">
      {movieContext.favoriteMovies
        ? movieContext.favoriteMovies.map((data) => (
            <MovieItem
              title={data.title}
              imgUrl={data.imgUrl}
              year={data.year}
            />
          ))
        : null}
    </div>
  );
};

export default FavoriteMovies;
