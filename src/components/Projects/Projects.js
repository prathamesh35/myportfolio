import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kisanmandi from "../../Assets/Projects/kisanmandi.png";
import atminterface from "../../Assets/Projects/atminterface.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kisanmandi}
              isBlog={false}
              title="Kisan Mandi"
              description="Kisan Mandi is a E-commerce website build by using html, css, javascript and php."
              ghLink="https://github.com/prathamesh35/KisanMandi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atminterface}
              isBlog={false}
              title="ATM Interface"
              description="I have built ATM interface using java during OASIS Infobyte Intership."
              ghLink="https://github.com/prathamesh35/OASIS"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
