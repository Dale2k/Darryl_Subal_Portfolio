import React from "react";
import "./style.css";
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
              currently reside in Charlotte, NC. I earned the Full Stack Web
              Development Certificate from UNC Charlotte in may 2023. Attending
              Kent State University I earned a Bachelor of Business
              Administration, major in Accounting and an Associate Degree in
              Information Technologies from Cuyahoga Community College. I have
              experience with Javascript, HTML, CSS, Bootstrap, Node, SQL,
              Mongo, and React. A few of the applications I have worked on
              include a password generator, note taker, a cms style SQL employee
              database, and a Node.js day planner. One of my best qualities is
              to be open to new experiences and to know learning is a continual
              life long process .
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
