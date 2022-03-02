import React from "react";
import "../styles/carousel.scss";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 758, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Carusel() {
  return (
    <div className="section2">
      <Carousel breakPoints={breakPoints} className="carousel">
        <div className="card card-1">
          <img src={"/imgs/css.png"} alt="techimg" />
          <h4>CSS</h4>
          <div className="price">
            <p>Duration: 3 month</p>
            <p>Price: 25$</p>
          </div>
        </div>

        <div className="card  card-2">
          <img src={"/imgs/bootstrap.png"} alt="techimg" />
          <h4>Bootstrap</h4>
          <div className="price">
            <p>Duration: 2 month</p>
            <p>Price: 25$</p>
          </div>
        </div>
        <div className="card card-3">
          <img src={"/imgs/html.png"} alt="techimg" />
          <h4>HTML</h4>
          <div className="price">
            <p>Duration: 2 month</p>
            <p>Price: 25$</p>
          </div>
        </div>
        <div className="card card-4">
          <img src={"/imgs/js.png"} alt="techimg" />
          <h4>JavaScript</h4>
          <div className="price">
            {" "}
            <p>Duration: 5 month</p>
            <p>Price: 25$</p>
          </div>
        </div>
        <div className="card card-6">
          <img src={"/imgs/java.png"} alt="techimg" />
          <h4>JAVA</h4>
          <div className="price">
            <p>Duration: 6 month</p>
            <p>Price: 25$</p>
          </div>
        </div>
        <div className="card card-6">
          <img src={"/imgs/jqurey.png"} alt="techimg" />
          <h4>jQuery</h4>
          <div className="price">
            {" "}
            <p>Duration: 5 month</p>
            <p>Price: 25$</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Carusel;
