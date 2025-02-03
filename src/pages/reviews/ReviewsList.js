// Imports
import React, { useState } from 'react'
import appStyles from '../../App.module.css'
import reviewStyles from '../../styles/Reviews.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Container, Spinner } from 'react-bootstrap';
import ReviewForm from '../reviews/ReviewForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditDeleteDropdown from '../../components/EditDeleteDropdown';
import ReviewEditForm from '../../pages/reviews/ReviewEditForm';

const ReviewsList = (props) => {
  // Get the current logged-in user
  const currentUser = useCurrentUser() 
  const { prodId, reviews, setReviews, setProduct } = props;
  // State to manage which review is being edited
  const [editingReviewId, setEditingReviewId] = useState(null);
  // Toggle between editing and non-editing mode for reviews  
  const toggle = (reviewId) => {
    setEditingReviewId(editingReviewId === reviewId ? null : reviewId);
  };    
  return (
    <>
        {reviews.results.length ? (            
            <Container className={appStyles.Content}>
                {/* New Review Form */}
                <ReviewForm prodId={prodId} setProduct={setProduct} setReviews={setReviews}/>
                {/* Filter reviews to match the current product and display them */}               
                {reviews.results.filter((review) => review.product_id === parseInt(prodId)).map((review) => (
                <Card key={review.id} className="border-0">
                    {currentUser?.username === review.owner && (
                    <EditDeleteDropdown 
                    reviewId={review.id} 
                    setReviews={setReviews} 
                    setProduct={setProduct}
                    toggle={toggle}                    
                    />
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
                    {/* Conditionally render the edit form if the review is being edited */}
                    {editingReviewId === review.id && (
                      <ReviewEditForm
                      setReviews={setReviews}                      
                      review={review}
                      toggle={toggle}
                      prodId={prodId}
                      />
                    )}
                    <hr className='m-1'></hr>
              </Card>
            ))}          
            
            </Container>        
            ) : (
            // Show a loading spinner if reviews are being fetched
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>
        )}
    </>     
  )
}

export default ReviewsList