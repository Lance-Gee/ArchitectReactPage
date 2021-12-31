import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./SectionDark.module.css";

function LightSection(props) {
  return (
    <div>
      <div className={classes.innerDivLight}>
        <Container className="p-5">
          <Row>
            <Col className="mt-5">
              {/* image taken from unsplash */}
              <figure>
                <img
                  className={classes.fitImage}
                  src={require("../../images/" + props.image)}
                  alt="2-robson-square-aefoundation-van"
                />
                <figcaption className={classes.figCaption}>
                  {props.caption}
                </figcaption>
              </figure>
            </Col>
            <Col md={8}>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LightSection;
