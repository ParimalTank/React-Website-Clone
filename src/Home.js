import React from "react";
import { Row, Col } from "reactstrap";
import H1 from "../src/H1.svg";
import H2 from "../src/H2.svg";
import H3 from "../src/H3.svg";

function Home() {
  return (
    <div>
      <Row>
        <Col>
          <div className="home">
            <img className="i1" src={H1} alt="Hello"></img>
            <img className="i2" src={H2} alt="Hello1"></img>
            <img className="i3" src={H3} alt="Hello2"></img>
          </div>
        </Col>
        <Col>
          <div>Hello from col 2</div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
