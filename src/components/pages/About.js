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
                1. <span> Password Generator </span>{" "}
              </em>{" "}
              where the user selects between 8 and 128 character length, and
              which type of character to include: letter, number, special
              character, etc. <br></br>
              <em>
                2. <span>Note Taker </span>{" "}
              </em>{" "}
              app deployed on Heroku that will allow you to add and delete
              notes. <br></br>{" "}
              <em>
                3. <span>SQL Database</span>{" "}
              </em>{" "}
              is a Content Management System SQL employee database. This
              application allows the common function of a typical database
              including creating, reading, updating and deleting items in the
              database. <br></br> video Link:
              https://drive.google.com/file/d/1zxmTThSdKwkbezvSe0HukTOpo_msbnZW/view{" "}
              <br></br>
              <em>
                4. <span>Movie App</span>{" "}
              </em>{" "}
              Using react you can add, update and review your favorite movies.{" "}
              <br></br>
              <em>
                5. <span>Quiz App</span>{" "}
              </em>{" "}
              utilizes a timer and checks provided answers against the correct
              answer. <br></br>{" "}
              <em>
                6. <span>Weather App</span>{" "}
              </em>{" "}
              Provide the weather for today an the next several upon entering a
              location. <br></br>
              One of my best qualities is to be open to new experiences and to
              know learning is a continual life long process .<br></br>contact
              me: dsubal@att.net
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
