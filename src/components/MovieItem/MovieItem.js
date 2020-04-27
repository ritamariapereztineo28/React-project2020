import React, { Component, useContext, useState } from "react";
import PropTypes, { checkPropTypes } from "prop-types";
import "./MovieItem.css";
import MoviesContext from "../Context";
import { Link } from "react-router-dom";

const MovieItem = (movie) => {
  const movieContext = useContext(MoviesContext);
  const [isFavorite, setFavorite] = useState(
    movieContext.isFavoriteMovie(movie.title)
  );

  const markAsFavorite = async (e) => {
    let i = -1;
    if (movieContext.isFavoriteMovie(movie.title)) {
      movieContext.favoriteMovies.find((m, index) => {
        if (m.title === movie.title) {
          i = index;
        }
      });

      if (i > -1) {
        await movieContext.favoriteMovies.splice(i, 1);
        setFavorite(false);
      }
    } else {
      movieContext.setFavoriteMovies(movie);
      setFavorite(true);
    }
  };

  const { id, title, imgUrl, year } = movie;
  return (
    <>
      <Link
        key={id}
        to={{
          pathname: "/datamovie",
          state: {
            title: title,
            img: imgUrl,
          },
        }}
      >
        <div className="container-movieItem" key={id}>
          <h1 className="title-movie">{title}</h1>
          <img src={imgUrl} alt="imagen" />
          <h2 className="year">{year}</h2>
        </div>
      </Link>
      <input type="checkbox" checked={isFavorite} onChange={markAsFavorite} />
    </>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.any.isRequired,
};

export default MovieItem;
