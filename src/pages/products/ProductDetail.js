import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from '../../App.module.css'
import { Col, Container, Row } from 'react-bootstrap';

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({ results: [] });
    const [reviews, setReviews] = useState({ results: [] });
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          const [{ data: product }, {data: reviews}] = await Promise.all([
            axiosReq.get(`/products/${id}`),
            axiosReq.get(`/reviews/?products=${id}`)
          ]);
          setProduct({ results: [product] });
          setReviews(reviews);
          console.log(product);
        } catch (error) {          
        }
      };
  
      handleMount();
    }, [id]);

  return (
    <Row>
      <Col className="my-auto py-2 p-md-2">        
        <Container className={appStyles.Content}>
        </Container>
                
        <Container className={appStyles.Content}>                               
        </Container>    
      </Col>
    </Row>
  )
}

export default ProductDetail