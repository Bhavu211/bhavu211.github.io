import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FaMedium } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
         
          <Col md={3}>
            <a
              href="https://github.com/Bhavu211"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/bhawna-mangla-1102/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://bhawnamangla98.medium.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaMedium />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
