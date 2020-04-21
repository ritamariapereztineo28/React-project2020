import React, { Component, useContext } from "react";
import PropTypes, { checkPropTypes } from "prop-types";
import "./MovieItem.css";
import MoviesContext from "../Context";
import { Link } from "react-router-dom";

const MovieItem = (movie) => {
  const movieContext = useContext(MoviesContext);

  const markAsFavorite = () => {
    movieContext.setFavoriteMovies(movie);
    // console.log(movieContext.favoriteMovies);
  };
  const { id, title, imgUrl, year } = movie;
  const isFavorite = movieContext.isFavoriteMovie(movie.id);
  console.log("este es isFavorite: ", isFavorite);
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
          <span>{id}</span>
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
