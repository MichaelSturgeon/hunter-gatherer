import React from 'react'
import appStyles from '../../App.module.css'
import reviewStyles from '../../styles/Reviews.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Container, Spinner } from 'react-bootstrap';
import ReviewForm from '../reviews/ReviewForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditDeleteDropdown from '../../components/EditDeleteDropdown';

const ReviewsList = (props) => {
  const currentUser = useCurrentUser()
 
  const { prodId, reviews, setReviews } = props;
    
  return (

    <>
        {reviews.results.length ? (            
            <Container className={appStyles.Content}>
                <ReviewForm prodId={prodId} />               
            {reviews.results.filter((review) => review.product_id === parseInt(prodId)).map((review) => (
                <Card key={review.id} className="border-0">
                    {currentUser?.username === review.owner && (
                    <EditDeleteDropdown revId={review.id} setReviews={setReviews} />
                    )}
                    <Card.Header className={`${reviewStyles.cardHeader} d-flex border-0 p-0 justify-content-start`}>
                        <Card.Img
                        variant="top"
                        src={review.profile_image}
                        alt={review.owner}
                        className={reviewStyles.avatar}
                        />
                        
                        <Card.Text className={reviewStyles.username}>{review.owner}</Card.Text>
                        
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