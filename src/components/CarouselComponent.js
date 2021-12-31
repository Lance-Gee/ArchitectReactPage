import { Carousel } from "react-bootstrap";
import classes from "./Carousel.module.css";
import image1 from "../images/background1.jpg";
import image2 from "../images/background2.jpg";
import image3 from "../images/background3.jpg";
import image4 from "../images/background4.jpg";
import React from "react";

function CarouselComponent() {
  return (
    <div className={classes.carouselSize}>
      <Carousel variant="dark">
        <Carousel.Item className={classes.carImageSize}>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carImageSize}>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h5 className={classes.lightText}>Second slide label</h5>
            <p className={classes.lightText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carImageSize}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h5 className={classes.lightText}>Third slide label</h5>
            <p className={classes.lightText}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.carImageSize}>
          <img className="d-block w-100" src={image4} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
