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
              Hi, I am Darryl Subal. I live in Charlotte, NC metro area. I
              earned the Full Stack Web Development Certificate from UNC
              Charlotte in May 2023. I attended Kent State University where I
              earned a Bachelor of Business Administration, major in Accounting
              and an Associate Degree in Information Technologies from Cuyahoga
              Community College. I have experience with Javascript, HTML, CSS,
              Bootstrap, Node, SQL, Mongo, and React. A few of the applications
              I have worked and the links to them are included on the Portfolio
              Tab <em>1. Password Generator</em> where the user selects between
              8 and 128 character length, and which type of character to
              include: letter, number, special character, etc.
              <em>2. Note Taker</em> app deployed on Heroku that will allow you
              to add and delete notes. <em>3.SQL Database </em> is a Content
              Management System SQL employee database. This application allows
              the common function of a typical database including creating,
              reading, updating and deleting items in the database. video Link:
              https://drive.google.com/file/d/1zxmTThSdKwkbezvSe0HukTOpo_msbnZW/view
              <em>4. Day Planner</em> using Node.js it utilizes local storage
              and and dynamically changes CSS dependent on the time of day.
              <em>5. Quiz App</em> utilizes a timer and checks provided answers
              against the correct answer. <em>6. Weather App</em> Provide the
              weather for today an the next several upon entering a location.
              One of my best qualities is to be open to new experiences and to
              know learning is a continual life long process . contact me:
              dsubal@att.net github: https://github.com/Dale2k
              <span>Thank you </span>
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
