
import React, { useState } from 'react';
import { Row, Col, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftComponent from "./leftComponent"
const RightComponent = () => {

    return (
        <Container className="themed-container" fluid={true}>
            <Row className="bg-dark d-flex justify-content-center">
                <center>
                    <Row className="mt-5 text-white d-flex justify-content-center">
                        <h2>Peerly</h2>
                    </Row>
                    <Row className="d-flex justify-content-between mt-5 ">
                        <Button className="text-white bg-dark btn-outline-dark">Sign UP</Button>
                        <Button className="text-white bg-dark btn-outline-dark btn-round-lg">Sign IN</Button>
                    </Row>
                    <Row className="mt-5 justify-content-around ">
                        <Button className="text-dark bg-white btn-circle btn-sm">LOGIN WITH EMAIL</Button>
                    </Row>
                    <Row className="mt-5 justify-content-around">
                        <h4 className="text-white">Lets Create the <br /> Office Positive</h4>
                    </Row>
                    <Row className=" justify-content-around">
                        <h5 className="text-white">____</h5>
                    </Row>

                    <Row className="mt-4 justify-content-around mb-5">
                        <h6 className="text-white">Encouragement Driven</h6>
                    </Row>
                </center>
            </Row>
        </Container>
    )
}
export default RightComponent;