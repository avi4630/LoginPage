
import React, { useState } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const WorkingComponent = () => {

  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");



  return (
    <Container className="themed-container" fluid={true}>
      <Row className="bg-info d-flex justify-content-around ">
        <h2 className="mt-5 text-white ">How it works</h2>

      </Row>
    </Container>
  )
}
export default WorkingComponent;