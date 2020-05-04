
import React, { useState } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const ImageComponent = () => {

  const [tokenData, setToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");



  return (
    <Container className="themed-container" fluid={true}>
      <img
        className="d-block"
        src={require('../images/brown-plant-on-white-ceramic-vase-4207892.jpg')}
        height="669px"
        alt="First slide"
      />
    </Container>
  )
}
export default ImageComponent;