import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${Styles.Content} p-4`}>
          <h1 >Register</h1>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Username"
                    name="username" />                    
                </Form.Group>                

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password1"/>
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Password(again)</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password(again)" 
                    name="password2"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Link  to="/signin">
            <span>Login here</span>
          </Link>
        </Container>        
      </Col>
    </Row>
  );
};

export default SignUpForm;