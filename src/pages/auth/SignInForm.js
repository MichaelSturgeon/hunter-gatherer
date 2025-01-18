import React, { useState } from "react";
import { Link, useHistory} from "react-router-dom";
import Styles from "../../App.module.css";
import signInStyles from "../../styles/SignInUpForm.module.css";
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
    <Row className={signInStyles.Row}>
      <Col className="my-auto py-2 p-md-2" md={{ span: 6, offset: 3 }}>
        <Container className={`${Styles.Content} p-4`}>
          <h1 className={signInStyles.Header}>Login to your account</h1>
            <Form onSubmit={handleSubmit}>
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

                <Button className={signInStyles.Button} type="submit">
                    Login
                </Button>
            </Form>
            <Link className={signInStyles.Link} to="/register">
            Not got an account?<span>Register here</span>
          </Link>
        </Container>        
      </Col>
    </Row>
  );
};

export default SignInForm;