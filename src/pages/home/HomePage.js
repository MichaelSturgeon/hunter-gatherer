import React from 'react'
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import appStyles from '../../App.module.css'
import homePageStyle from '../../styles/HomePage.module.css'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Row >
      <Col className="my-auto py-2 p-md-2">
        <Jumbotron className={homePageStyle.Jumbotron}>
          <Container className={`${homePageStyle.overlay} p-3`}>
            <h1 className={homePageStyle.Header}>Compare, Decide, Save<span className='d-none d-sm-block'> - The Ultimate Product Comparison Tool!</span></h1>
            <p className={homePageStyle.paragraph}>Find the best deals and make smarter buying decisions with our comprehensive product comparisons. Select a category below to begin!</p>           
          </Container>
        </Jumbotron>        
                
        <Container className={`${appStyles.Content} mt-2`}>
          <Link to="/products/boardgames" >
          <Button className={homePageStyle.Button} variant="link"><i class="fa-solid fa-dice"></i><span>Board Games</span></Button>
          </Link>
          <Link to="/more" >
          <Button className={homePageStyle.Button} variant="link"><i class="fa-regular fa-square-plus"></i><span>More</span></Button>
          </Link>                     
        </Container>    
      </Col>
    </Row>
  );
};

export default HomePage