import React, { Component } from "react";
import M from "materialize-css";
import one from "../../public/images/image1.jpg";
import two from "../../public/images/image3.jpg";
import three from "../../public/images/image2.jpg";
import four from "../../public/images/image4.jpg";
import seven from "../../public/images/image7.jpg";

class Carousel extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".carousel");
    M.Carousel.init(elems);
  }

  render() {
    return (
      <div class="carousel">
        <a class="carousel-item" href="#five!">
          <img alt="pic7" src={seven} />
        </a>
        <a class="carousel-item" href="#one!">
          {" "}
          <img alt="pic1" src={one} />
        </a>
        <a class="carousel-item" href="#two!">
          {" "}
          <img alt="pic2" src={two} />{" "}
        </a>
        <a class="carousel-item" href="#three!">
          {" "}
          <img alt="pic3" src={three} />
        </a>
        <a class="carousel-item" href="#four!">
          <img alt="pic4" src={four} />
        </a>
      </div>
    );
  }
}

export default Carousel;
