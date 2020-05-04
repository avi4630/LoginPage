
import React, { useState } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftComponent from "./leftComponent"
import RightComponent from './rightComponent';
import MiddelComponent from "./middelComponent"
const LoginComponent = () => {

  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");



  return (
    <Container className="themed-container" fluid={true} >
      <Row >
        <Col className="bg-info" xs="4" >
          <LeftComponent />
        </Col>
        <Col xs="4" className="themed-container bg-info " fluid={true}>
         <MiddelComponent/> 
        </Col>
        <Col className="bg-dark" xs="4">
          <RightComponent />
        </Col>
      </Row>
    </Container>
  )
}
export default LoginComponent;