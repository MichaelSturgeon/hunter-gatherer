import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import Styles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignInForm = () => {
    const [signInData, setSignInData] = useState({
      username: "",
      password: "",
    });

    const {username, password} = signInData
    const history = useHistory();
    const handleChange = (event) => {
      setSignInData({
        ...signInData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post('/dj-rest-auth/login/', signInData);
        history.push('/');        
      } catch (error) {
        
      }
    }

  return (
    <Row >
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${Styles.Content} p-4`}>
          <h1 >Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}/>                    
                </Form.Group>                

                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
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