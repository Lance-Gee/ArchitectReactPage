import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./SectionDark.module.css";

function SectionDark(props) {
  return (
    <div>
      <div className={classes.innerDiv}>
        <Container className="p-5">
          <Row>
            <Col md={8}>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
            </Col>
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
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SectionDark;
