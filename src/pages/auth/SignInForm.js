// Imports
import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import Styles from "../../App.module.css";
import signInStyles from "../../styles/SignInUpForm.module.css";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
// Define SignInForm functional component
const SignInForm = () => {
  // Get the setCurrentUser function from context to update the logged-in user's state
  const setCurrentUser = useSetCurrentUser();
  // State to store form data for username and password
  const [signInData, setSignInData] = useState({
      username: "",
      password: "",
  });
  // Destructure username and password from state for easier access
  const {username, password} = signInData
  // State to hold any error messages from the API response
  const [errors, setErrors] = useState({});
  const history = useHistory();
  // Handle changes in form fields and update state accordingly
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };
  // Handle form submission for login
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push('/');        
    } catch (error) {
      setErrors(error.response?.data);      
    }
  }

  return (
    <Row className={signInStyles.Row}>
      <Col className="my-auto py-2 p-md-2" md={{ span: 6, offset: 3 }}>
        <Container className={`${Styles.Content} p-4`}>
          <h1 className={signInStyles.Header}>Login to your account</h1>
            <Form onSubmit={handleSubmit}>
                {/* Username input field */}
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control
                    className={signInStyles.Input}
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
                <Form.Group controlId="password">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                    className={signInStyles.Input}
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={handleChange}/>
                </Form.Group>
                {/* Display errors related to password if any */}
                {errors?.password?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}
                 {/* Submit button for the login form */}
                <Button className={signInStyles.Button} type="submit">
                    Login
                </Button>
                {/* Display non-field errors if any (e.g., incorrect credentials) */}
                {errors?.non_field_errors?.map((message, idx) =>
                  <Alert variant='warning' key={idx}>{message}</Alert>
                )}
            </Form>
            <Link className={signInStyles.Link} to="/register">
            Not got an account? <span>Register here</span>
          </Link>
        </Container>        
      </Col>
    </Row>
  );
};

export default SignInForm;