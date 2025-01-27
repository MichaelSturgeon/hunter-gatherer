import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from '../../App.module.css'
import navStyles from '../../styles/NavBar.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

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
            axiosReq.get(`/reviews/?products=${id}`)
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
                  <Card.Text>Rating({product.reviews_count})</Card.Text>
                  <Card.Text>£{product.price}</Card.Text>
                  <small className="text-muted">Last Updated: {product.updated_at}</small>
                </Card.Body>                
            </Container>
          </>
            
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
       
        
          {reviews.results.length ? (
            
              <Container className={appStyles.Content}>
                {reviews.results.map((review) => (
                  <Card key={review.id} className="mb-1 border-0">
                    <Card.Header className={`${detailStyles.cardHeader} d-flex border-0 p-0 justify-content-start`}>
                      <Card.Img
                        variant="top"
                        src={review.profile_image}
                        alt={review.owner}
                        className={detailStyles.avatar}
                        />
                        <Link exact className={navStyles.NavLink}>
                          <Card.Text className="mb-0">{review.owner}</Card.Text>
                        </Link>
                        <span className='ml-auto my-auto mr-2'>                        
                          {Array.from({ length: review.rating }, (_, index) => (
                            <i key={index} className="fa-solid fa-star p-0"></i>
                          ))}                           
                        </span>                                                                 
                    </Card.Header>                    
                    <Card.Body className="pb-0">
                      <Card.Text>{review.content}</Card.Text>                    
                      <small className="text-muted">Created: {review.created_at}</small>                    
                    </Card.Body>
                  </Card>                
                ))}
              </Container>
            
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