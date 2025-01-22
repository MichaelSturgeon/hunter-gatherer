import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import appStyles from "../../App.module.css";
import notFoundStyles from "../../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <Row className={notFoundStyles.Row}>
      <Col className="my-auto py-2 p-md-2" md={{ span: 6, offset: 3 }}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={notFoundStyles.Header}>404 Page Not Found</h1>
          <p className={notFoundStyles.paragraph}>Hmm... I can't seem to find this page! Could you check if I accidentally left it at home?</p>
          <Link to="/">
            <Button className={notFoundStyles.Button}>Home</Button>                     
          </Link>
        </Container>                
      </Col>
    </Row>
  )
}

export default NotFound