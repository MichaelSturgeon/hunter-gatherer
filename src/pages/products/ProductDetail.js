import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from '../../App.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductRating from '../../components/ProductRating';
import ReviewsList from '../reviews/ReviewsList';

const ProductDetail = () => {
    const {id} = useParams();
    const [products, setProduct] = useState({ results: [] });
    const product = products.results[0];
    const [reviews, setReviews] = useState({ results: [] });
  
    useEffect(() => {
      const handleMount = async () => {
        try {
          const [{ data: products }, {data: reviews}] = await Promise.all([
            axiosReq.get(`/products/${id}`),
            axiosReq.get(`/reviews/`)
          ]);
          setProduct({ results: [products] });
          setReviews(reviews);
        } catch (error) {         
        }
      };
  
      handleMount();
    }, [id]);   

  return (
    <Row xs={12}>
      <Col className="my-auto py-2 p-md-2"> 
        {product? (
          <>          
            <Container key={product.id} className={`${appStyles.Content} mb-2`}>
                <Card.Img
                  variant="top"
                  src={product.product_image}
                  alt={product.image_alt }
                  className={detailStyles.img}
                  />                           
            </Container>
            
            <Container className={`${appStyles.Content} mb-2`}>
                <Card.Title className={detailStyles.Header}>{product.name}</Card.Title>
                <Card.Body className="pb-0">
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <ProductRating id={product.id} reviewsCount={product.reviews_count}/>
                  </Card.Text>
                  <Card.Text>£{product.price}</Card.Text>
                  <small className="text-muted">Last Updated: {product.updated_at}</small>
                </Card.Body>                
            </Container>
            <ReviewsList id={product.id} reviews={reviews}/>
          </>            
          ) : (            
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}     
      </Col>
    </Row>
  )
}

export default ProductDetail