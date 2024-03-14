import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Heroes_Bajaj_2023 from "../../images/Heroes_Bajaj_2023.png";
import Bright_Beginner_Ericsson_2021 from "../../images/Bright_Beginner_Ericsson_2021.png";
import product_management from "../../images/product_management.png";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>
            <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.linkedin.com/in/bhawna-mangla-1102/overlay/1635524927449/single-media-viewer/?profileId=ACoAAB5kbY8BXoXgEygFbn9qyoSOLrQ9w5P-uIY"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={Heroes_Bajaj_2023}
                                        alt={Heroes_Bajaj_2023}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  HEROES Award
                          
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Bajaj Finserv
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={"https://www.linkedin.com/in/bhawna-mangla-1102/overlay/1635524925633/single-media-viewer/?profileId=ACoAAB5kbY8BXoXgEygFbn9qyoSOLrQ9w5P-uIY"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={Bright_Beginner_Ericsson_2021}
                                        alt={Bright_Beginner_Ericsson_2021}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  BRIGHT BEGINEER Award
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Ericsson
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href="https://www.linkedin.com/learning/certificates/6ff50647f6ce741ce18fc2181d1d93fe98ade8fc7d1701219e73205b924e6321?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BEcagAYBYQgmFAFAo0XBZhA%3D%3D"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={product_management}
                                        alt={product_management}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Product Management Course
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - LinkedIn Learning
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
