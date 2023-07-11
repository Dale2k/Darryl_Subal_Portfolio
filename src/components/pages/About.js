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
              Hi, I am Darryl Subal. I live in Charlotte, NC. I earned the Full
              Stack Web Development Certificate from UNC Charlotte in May 2023.
              I attended Kent State University where I earned a Bachelor of
              Business Administration, major in Accounting and an Associate
              Degree in Information Technologies from Cuyahoga Community
              College. I have experience with Javascript, HTML, CSS, Bootstrap,
              Node, SQL, Mongo, and React.{" "}
              <span>A few of the apps I have created:</span>
              <br></br>{" "}
              <em>
                <span> Password Generator </span>{" "}
              </em>{" "}
              - The user selects a password between 8 and 128 character length,
              and types of character to include: letter, number, special
              character, etc. <br></br>
              <em>
                <span>Note Taker </span>{" "}
              </em>{" "}
              - App deployed on Heroku that will allow you to add and delete
              notes. <br></br>{" "}
              <em>
                <span>Movie App</span>{" "}
              </em>{" "}
              - Using React you can add, update and review your favorite movies.{" "}
              <br></br>
              <em>
                <span>Quiz App</span>{" "}
              </em>{" "}
              - Utilizes a timer and grades your provided answers against the
              correct answer. <br></br>{" "}
              <em>
                <span>Weather App</span>{" "}
              </em>{" "}
              - Provides the weather for today an the next several upon entering
              a location. <br></br>
              One of my best qualities is to be open to new experiences and to
              know learning is a continual life long process .<br></br>
              <span>Contact Me: </span>dsubal@att.net
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
