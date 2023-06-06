import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Database from "../Database";
import Note from "../Note";
import Password from "../Password";
import Quiz from "../Quiz";
import Movie from "../Movie";
import Weather from "../Weather";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <h3>Click on links below to be taken to github application.</h3>
      <Container>
        <Row>
          <Col>
            <Database />
            <Note />
          </Col>
        </Row>
        <Row>
          <Col>
            <Password />
            <Quiz />
          </Col>
        </Row>
        <Row>
          <Col>
            <Movie />
            <Weather />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
