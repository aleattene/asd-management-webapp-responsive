import React, { Component } from "react";
import bolt from "../assets/img/bolt_1920_910.jpg";
import rossi from "../assets/img/rossi_1920_910.jpg";
import federer from "../assets/img/federer_1920_910.jpg";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide row-md-12 mt-3"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={bolt} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={rossi} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={federer} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
