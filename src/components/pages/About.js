import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import imageSrc from "./utils/profile.jpg";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <Container>
        <Row>
          <Col>
            <p>
              Hi, I am Darryl Subal. I was born in a Cleveland, OH suburb and
              currently reside in Charlotte, NC. I majored in Accounting,
              earning a BBA from Kent State University along with a BS in Fine
              and Professional Arts and an Associate Degree in Healthcare IT
              Technologies from Cuyahoga Community College. In February, 2023 I
              attended UNCC Coding Bootcamp. I have experience with Javascript,
              HTML, CSS, Bootstrap, Node, SQL, Mongo, and React. A few of the
              applications I have worked on include a password generator, note
              taker, a cms style employee database, and a day planner. One of my
              best qualities is to be open to new experiences and to know
              learning is a continual life long process .
            </p>
          </Col>
          <Col xs={6}>
            <Image src={imageSrc} fluid className="float-right" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
