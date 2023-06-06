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
      <h3>Click on pictures below to be taken to github application.</h3>
      <Container>
        <Row>
          <Col>
            <Database />
            <h6>
              A command line CMS created with Node.js, Inquirer and Mysql.
            </h6>

            <Note />
            <h6>
              An javascript application to create, save and delete notes using
              an Express.js backend.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Password />
            <h6>
              A javascript random password generator based off user input.
            </h6>
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
