import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Bhawna Mangla </b> 
                  and I am working as a <b className="purple">Product Manager </b> 
                    at <b className="purple">Bajaj Finserv  </b>
                      in Pune, India.
                      <br />
                      <br />
                       I am a <b className="purple">Btech </b> graduate in <b className="purple">Information Technology </b>
                     from <b className="purple">Jaypee University of Information Technology</b>, Solan <b className="purple">2020</b> Batch.
                <br />
                <br />
                        I am proficient in diverse range of Product Management such as
                  <b className="purple">
                    {" "}
                    Strategic Planning, Market Analysis, Stakeholder Engagement</b> and <b className="purple"> Project Coordination.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as
                <b className="purple">
                    {" "}                
                Agile</b> and <b className="purple">Scrum</b> methodologies, <b className="purple">Mirosoft Azure</b> and <b className="purple">Jira</b> for raising User stories and resolving IT requests, <b className="purple">Salesforce</b> and <b className="purple">PowerBI </b>for tracking Reports and Dashboards. <b className="purple">Google Analytics</b> for analysis of website usage by users. <b className="purple">Postman</b> for testing API. <b className="purple"> Microsoft Suite</b> for presentation and computation purposes .{" "} <b className="purple">Figma</b> for designing.
                  
                <br />
                <br />
                Whenever possible, I also apply my passion for technical writing by writing <b className="purple">Blog</b> on <b className="purple">Medium.</b>
               &nbsp;
              {" "}    
              
                <br />
                <br /> My enthusiasm for product development and dedication to staying ahead of the industry trends make me a <b className="purple">valuable asset</b> to any team or project.
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
