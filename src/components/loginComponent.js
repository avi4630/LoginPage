
import React, { useState } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkingComponent from './workingComponent';
import ImageComponent from './imageComponent';
import FormComponent from './formComponent';
const LoginComponent = () => {

  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");



  return (
    <Container className="themed-container" fluid={true} >
      <Row >
        <Col className="bg-info" xs="4" >
          <WorkingComponent />
        </Col>
        <Col xs="4" className="themed-container bg-info " fluid={true}>
          <ImageComponent />
        </Col>
        <Col className="bg-dark" xs="4">
          <FormComponent />
        </Col>
      </Row>
    </Container>
  )
}
export default LoginComponent;