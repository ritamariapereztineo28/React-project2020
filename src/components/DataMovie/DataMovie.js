import React, { Component } from "react";
import PropsType, { checkPropTypes } from "prop-types";
import "./DataMovie.css";
import { containerInformation } from "../../utils/containerInformation";
import ReactLoading from "react-loading";
import { AppContext, MyContext } from "../../App";
import MovieItem from "../MovieItem";
import { FaBuromobelexperte } from "react-icons/fa";

export default class DataMovie extends Component {
  state = {
    year: "",
    actors: "",
    plot: "",
    director: "",
    runtime: "",
    error: "",
    loading: true,
    check: AppContext.checkboxValue,
  };

  componentDidMount() {
    const { title } = this.props;
    containerInformation(title, "t")
      .then((jsonInfo) => {
        this.setState({
          actors: jsonInfo.Actors,
          plot: jsonInfo.Plot,
          director: jsonInfo.Director,
          runtime: jsonInfo.Runtime,
          year: jsonInfo.Year,
          error: "",
          loading: true,
        });
      })
      .catch((e) => {
        this.setState({
          loading: false,
          error: e.message,
        });
      });
  }
  handleChange = () => {
    this.setState({ check: !this.state.check });
    console.log(this.state.check ,"otro")
  };

  searchSelections = (value, title) => {
    // console.log("ESTE ES SELECCION: ",value.selectionMovie)
    console.log(value.selectionMovie)
    if (value.selectionMovie) {
      value.selectionMovie.map((data) => {
        if (data[0].title === title) {
          value.checkboxValue = true;
          return;
        } else {
          value.checkboxValue = false;
        }
      });
    }
  };
  
  removeSelections = (arr, title) => {
  arr && arr.splice( arr.indexOf(title), 1);
  }

  render() {
    const { title, img, year } = this.props;
    const pruebaArray = [];
    const pruebaObj = { title: title, image: img, year: year };

    const { loading, error } = this.state;
    if (!loading) {
      return (
        <div className="message-loading">
          <ReactLoading
            type={"spokes"}
            color={"#000"}
            width={"20%"}
          ></ReactLoading>
        </div>
      );
    }
    if (error) {
      return <div className="message-error">{error}</div>;
    }
    return (
      <AppContext>
        {(value) => (
          this.searchSelections(value, title),
          
            <div className="info-movie">
              <h1 className="title-movie">{title}</h1>
              <div className="general-data-movie">
                <img className="image-movie" src={img} alt="img" />

                {this.state.plot && (
                  <p className="review-movie">
                    Review: <br />
                    {this.state.plot}
                  </p>
                )}

                <div className="data-movie">
                  {this.state.director && (
                    <p className="director-movie">
                      Director: {this.state.director}
                    </p>
                  )}
                  {this.state.runtime && (
                    <p className="runtime-movie">
                      Runtime: {this.state.runtime}
                    </p>
                  )}
                  {this.state.actors && (
                    <p className="actors-movie">Actors: {this.state.actors}</p>
                  )}

                  <div className="add-fav">
                    <input
                      type="checkbox"
                      className="check"
                      onChange={this.handleChange}
                      checked={this.state.check}
                    />

                    {pruebaArray.push(pruebaObj, this.state.check || false)}

                      {this.state.check
                      ? value.selectionMovie.push(pruebaArray)
                      : this.removeSelections(value.selectionMovie, title)}
                      {console.log(pruebaArray, "este es el array")}
                    {/* {console.log(value.selectionMovie)} */}
                    <label>Agregar a favorito</label>
                  </div>
                </div>
              </div>
            </div>
        )}
      </AppContext>
    );
  }
}

DataMovie.propsType = {
  title: PropsType.string,
  img: PropsType.string,
};
