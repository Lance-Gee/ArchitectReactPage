import Author from "../layouts/Author";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const author_data = [
  {
    id: 1,
    image: "avatar1.jpg",
    author: "Arthur Erickson",
    description:
      "Arthur Charles Erickson, architect (b at Vancouver, BC 14 June 1924, d at Vancouver 20 May 2009). Erickson studied at UBC and McGill and completed his architectural training in 1950. Army service took him to Asia, and after graduation he travelled in Europe and the Middle East.",
  },
  {
    id: 2,
    image: "avatar2.jpg",
    author: "Douglas Cardinal",
    description:
      "Douglas Joseph Cardinal, architect (born 7 March 1934 in Calgary, AB). Recognized for his commitment to excellence and his unique creative vision, Cardinal is credited with creating an Indigenous style of Canadian architecture, characterized by gracious organic forms, which continually challenged the most advanced engineering standards.",
  },
  {
    id: 3,
    image: "avatar3.jpg",
    author: "Moshe Safdie",
    description:
      "Moshe Safdie, CC, architect, professor, urban planner, educator, theorist, author (born 14 July 1938 in Haifa, Palestine [now Israel]).",
  },
];

function Layout1(props) {
  const [author, setAuthor] = useState("Arthur Erickson");

  if (author === "Arthur Erickson") {
    props.pickedArthur();
  } else if (author === "Douglas Cardinal") {
    props.pickedDouglas();
  } else if (author === "Moshe Safdie") {
    props.pickedMoshe();
  } else {
    console.log("Something went wrong with author state");
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          {author_data.map((authors) => {
            return (
              <Col key={authors.id} className="pe-5 ps-5">
                <Author
                  key={authors.id}
                  image={authors.image}
                  author={authors.author}
                  description={authors.description}
                  handleClick={(author) => setAuthor(author)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Layout1;
