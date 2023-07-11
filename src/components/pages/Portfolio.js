import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Note from "../Note";
import Password from "../Password";
import Quiz from "../Quiz";
import Movie from "../Movie";
import Weather from "../Weather";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <h3>Click on the links below to open the application.</h3>
      <Container>
        <Row>
          <Col>
            <Note />
            <h6>
              A javascript application to create, save and delete notes using an
              Express.js backend.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Password />
            <h6>A random password generator based off user input.</h6>
            <Quiz />
            <h6>A web API with dynamically updating HTML and CSS.</h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Movie />
            <h6>
              A full stack application with MongoDB, React, Express.js and
              Node.js
            </h6>
            <Weather />
            <h6>
              A server side API utilizing Javascript, HTML, Bootstrap and
              JQuery.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
