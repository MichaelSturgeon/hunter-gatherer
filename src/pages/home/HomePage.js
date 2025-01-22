import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import appStyles from '../../App.module.css'
import homePageStyle from '../../styles/HomePage.module.css'

const HomePage = () => {
  return (
    <Row >
      <Col className="my-auto py-2 p-sm-2" md={12}>        
        <Container className={`${appStyles.Content} p-4 mb-2`}>
          <h1>Compare, Decide, Save - The Ultimate Product Comparison Tool</h1>
          <p>Find the best deals and make smarter buying decisions with our comprehensive product comparisons. Select a category to begin!</p>           
        </Container>        
        <Container className={`${appStyles.Content} p-4`}>
          <Button className={homePageStyle.Button} variant="link"><i class="fa-solid fa-dice"></i><span>Board Games</span></Button>            
          <Button className={homePageStyle.Button} variant="link"><i class="fa-regular fa-square-plus"></i><span>More</span></Button>                      
        </Container>    
      </Col>
    </Row>
  );
};

export default HomePage