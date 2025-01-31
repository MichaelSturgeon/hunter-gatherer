import React, { useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap';
import reviewStyles from '../../styles/Reviews.module.css'
import { axiosRes } from '../../api/axiosDefaults';

const ReviewEditForm = (props) => {
    const { toggle, prodId, review, setReviews } = props;

    const [reviewData, setReviewData] = useState({
        rating: review.rating,
        content: review.content,
        product: prodId
    });
    const {rating, content} = reviewData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setReviewData({
        ...reviewData,
        [event.target.name]: event.target.value,
        });
    };
 
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/reviews/${review.id}/`, {
                content: reviewData.content.trim(),
                rating: reviewData.rating,
                product: reviewData.product
            });
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: prevReviews.results.map((rev) => {
                    return rev.id === review.id ? {
                        ...rev,
                        rating: reviewData.rating,
                        content: reviewData.content.trim(),                        
                        product: reviewData.product,
                        created_at: 'now'
                    } : rev;
                }),
            }));
          toggle();
        } catch (error) {
            setErrors(error.response?.data);          
        }
      };

  return (    
    <>
        <Card className="border-0">            
            <Card.Body>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="content">
                        <Form.Label className="d-none">Rating</Form.Label>
                        <Form.Control
                            className={reviewStyles.Input}
                            size='lg'                       
                            as="select"                   
                            name="rating"
                            value={rating}
                            onChange={handleChange}
                            custom
                        >
                            <option value="">How would you rate this product?</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>
                        {errors.rating?.map((message, idx) =>
                        <Alert variant='warning' key={idx}>{message}</Alert>
                        )}                       
                    </Form.Group>                
                    

                    <Form.Group controlId="content">
                        <Form.Label className="d-none">Review Content</Form.Label>
                        <Form.Control
                            className={reviewStyles.Input}                       
                            as="textarea"
                            rows={5}
                            placeholder="What should customers know?"
                            name="content"
                            value={content}
                            onChange={handleChange}
                        />
                        {errors.content?.map((message, idx) =>
                    <Alert variant='warning' key={idx}>{message}</Alert>
                    )}
                    
                    </Form.Group>                
                    <Button  onClick={() => toggle()} type="button" className={`${reviewStyles.editFormButton} mr-2 `}>Cancel</Button>

                    <Button type="submit" className={reviewStyles.editFormButton}>
                        Save
                    </Button>
                    {errors.non_field_errors?.map((message, idx) =>
                    <Alert variant='warning' key={idx}>{message}</Alert>
                    )}
                    
                </Form>
            </Card.Body>
        </Card>        
    </>
   ); 
};      

export default ReviewEditForm