import './App.css';
import $ from 'jquery';
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import {Form, Button, Row, Col, Container} from "react-bootstrap"

function App() {

    const login = () => {
        const username = $("#username").val();
        const password = $("#password").val();
        Axios.post("http://localhost:3001/validateLogin", {
            username: username,
            password: password,
        }).then(() => {
            alert("Successful login!");
        }).catch(() => {
            alert("Invalid login");
        });
    }

  return (
      <>
          <Container>
              <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
              <Row className="mt-5">
                  <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label>Username</Form.Label>
                              <Form.Control type="text" placeholder="Username" id="username" name="username"/>
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword" className="text-section-break">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" id="password" name="password"/>
                          </Form.Group>

                          <Button variant="success btn-block" type="submit" className="text-section-break" onClick={login}>Login</Button>
                          <p className="text-section-break"><a href="#">Forgot your password?</a></p>
                          <p className="text-section-break">Not a member? <a href="#">Click here</a> to create an account.</p>
                      </Form>
                  </Col>
              </Row>
          </Container>
      </>
  );
}

export default App;
