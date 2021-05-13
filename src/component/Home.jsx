import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Weather from './Weather';
import Sun from '../img/sun.jpg';
import Sky from '../img/cloud.jpg';
import Rain from '../img/rain.jpg';
import WeatherLink from "./WeatherLink";
const Home = () => {
  return (
    <>
      <div
        className="row container mx-auto full bg-color "
        style={{
          paddingRight: "0px",
          paddingLeft: "0px",
          
        }}
      >
        <div
          className="px col-6 cl-1"
          style={{ paddingRight: "1rem", paddingLeft: "2rem" }}
        >
          <p className=" mt-5 fst-italic home-para">check weather info of your city</p>

          <h1 className=" h1-tag text-capitalize   me-3">
            to know the weather of your city 
          </h1>
          <div className="text-cen">
            <button className="btn btn-success style-btn">
              <WeatherLink />
            </button>
          </div>
          
        </div>
        <div
          className="col-6 cl-2 px corosol"
          style={{ paddingRight: "0", paddingLeft: "0px" }}
        >
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Sun} className="d-block w-100 equal" alt="SDjkbdsk" />
              </div>
              <div className="carousel-item">
                <img src={Rain} className="d-block w-100 equal" alt="sdcnd" />
              </div>
              <div className="carousel-item">
                <img src={Sky} className="d-block w-100 equal equal-3" alt="adjcn" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
