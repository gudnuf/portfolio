import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';
import roygbiv from '../images/projects/roygbiv.png';

const SecondProject = () => (
  <>
    <Row className="mt-5">
      <Col className="d-flex align-items-center justify-content-center flex-column text-center">
        <FadeIn>
          <h2>ROYGBIV (BOLT 12 prism)</h2>
          <h5>Create BOLT 12 offers that represent Lightning Prisms</h5>
        </FadeIn>
      </Col>
    </Row>
    <Row>
      <Col
        lg={6}
        md={12}
        xs={12}
        className="justify-content-center d-flex flex-column"
      >
        <FadeIn>
          <a href="https://roygbiv.money" target="_blank" rel="noreferrer">
            <img
              src={roygbiv}
              alt="ROYGBIV frontend"
              className="featured-project"
            />
          </a>
          {/* <div className="featured-link">
              Go To App <i className="fa-solid fa-arrow-up-right-from-square" />
          </div> */}
        </FadeIn>
      </Col>
      <Col
        className="d-flex align-items-center justify-content-end"
        md={12}
        lg={6}
      >
        <FadeIn>
          <p className="second-project">
            This project started as the winning project at the btc++ hackathon
            with a 7 developer team. Prisms are a CLN plugin that allows users
            to effectively split payments at the level of their node versus at
            the client level. I was most involved with the plugin development on
            the backend, and I have since continued to iterate on the plugin and
            a Docker environment with a series of bash scripts to easily spin up
            a test environment for the plugin, or to deploy a bitcoin and CLN
            node with prisms enabled.
            <br /> <br />
            <strong>Key Technologies: </strong> Python, C-Lightning, Docker,
            Bash
          </p>
        </FadeIn>
      </Col>
    </Row>
    <FadeIn>
      <Row className="align-items-center buttons mt-3">
        <Col className="d-flex justify-content-around">
          <Button
            variant="dark"
            as="a"
            href="https://youtu.be/WFpQpmCEJGg"
            target="blank"
          >
            View Demo
          </Button>
          <Button variant="dark" as="a" href="/projects">
            More Projects
          </Button>
        </Col>
      </Row>
    </FadeIn>
  </>
);

export default SecondProject;
