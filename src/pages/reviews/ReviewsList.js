import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import appStyles from '../../App.module.css'
import navStyles from '../../styles/NavBar.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Container, Spinner } from 'react-bootstrap';

const ReviewsList = (props) => {

  const { id, reviews } = props;
    
  return (

    <>
        {reviews.results.length ? (            
            <Container className={appStyles.Content}>                
            {reviews.results.filter((review) => review.product_id === parseInt(id)).map((review) => (
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
                    <span className={`${detailStyles.stars} ml-auto my-auto mr-2`}>                        
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
    </>     
  )
}

export default ReviewsList