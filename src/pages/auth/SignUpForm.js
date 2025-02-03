// Imports
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import signUpStyles from "../../styles/SignInUpForm.module.css";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
// Define SignUpForm functional component
const SignUpForm = () => {
  // State to hold sign-up form data (username, password1, and password2)
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;
  // State to hold any error messages returned by the API
  const [errors, setErrors] = useState({});
  const history = useHistory();
  // Handle form input changes (username, password1, password2)
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };
  // Handle form submission for registration
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API request to the registration endpoint with signUpData
      await axios.post('/dj-rest-auth/registration/', signUpData);
      history.push('/login');
    } catch (error) {
      setErrors(error.response?.data);
    }
  }

  return (
    <Row className={signUpStyles.Row}>
      <Col className="my-auto py-2 p-sm-2" md={{ span: 6, offset: 3 }}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={signUpStyles.Header}>Create an account</h1>
           {/* Sign-up form */}
            <Form onSubmit={handleSubmit}>
              {/* Username input field */}
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
                {/* Display errors related to username if any */}
                {errors?.username?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}               
                {/* Password input field */}
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
                 {/* Display errors related to password1 if any */}
                {errors?.password1?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}
                {/* Password input field */}
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
                 {/* Display errors related to password2 if any */}
                {errors?.password2?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}
                {/* Submit button for the registration form */}
                <Button className={signUpStyles.Button} type="submit">
                    Register
                </Button>
                 {/* Display non-field errors if any (e.g., general form errors) */}
                {errors?.non_field_errors?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}
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