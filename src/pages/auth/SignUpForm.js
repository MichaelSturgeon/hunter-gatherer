import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import signUpStyles from "../../styles/SignInUpForm.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const { username, password1, password2 } = signUpData;
  const history = useHistory();
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/login');
    } catch (error) {
      
    }
  }

  return (
    <Row className={signUpStyles.Row}>
      <Col className="my-auto py-2 p-sm-2" md={{ span: 6, offset: 3 }}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={signUpStyles.Header}>Create an account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control
                    className={signUpStyles.Input} 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}/>                    
                </Form.Group>                

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                    className={signUpStyles.Input}
                    type="password" 
                    placeholder="Password" 
                    name="password1"
                    value={password1}
                    onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Password(again)</Form.Label>
                    <Form.Control
                    className={signUpStyles.Input}
                    type="password" 
                    placeholder="Password(again)" 
                    name="password2"
                    value={password2}
                    onChange={handleChange}/>
                </Form.Group>

                <Button className={signUpStyles.Button} type="submit">
                    Register
                </Button>
            </Form>
            <Link className={signUpStyles.Link} to="/login">
            Already have an account? <span >Login here</span>
          </Link>
        </Container>        
      </Col>
    </Row>
  );
};

export default SignUpForm;