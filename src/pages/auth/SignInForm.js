import React from "react";
import { Link } from "react-router-dom";
import Styles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignInForm = () => {
  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${Styles.Content} p-4`}>
          <h1 >Login</h1>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Username"
                    name="username" />                    
                </Form.Group>                

                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Link  to="/register">
            <span>Register here</span>
          </Link>
        </Container>        
      </Col>
    </Row>
  );
};

export default SignInForm;