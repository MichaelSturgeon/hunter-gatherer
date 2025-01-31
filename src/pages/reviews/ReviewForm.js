import React, { useState } from 'react'
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Button, Form, Alert, Card} from 'react-bootstrap';
import { axiosRes } from '../../api/axiosDefaults';
import reviewStyles from '../../styles/Reviews.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ReviewForm = (props) => {
    const { prodId, setProduct, setReviews } = props;
    
    const [formToggle, setFormToggle] = useState(false)
    const toggle = () => {
        setFormToggle(!formToggle);        
    }

    const currentUser = useCurrentUser();

    const [reviewData, setReviewData] = useState({
        rating: "",
        content: "",
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
        
        const { data: newReview } = await axiosRes.post("/reviews/", reviewData);
        
        setReviewData({ rating: "", content: "" });
        
        setProduct((prevProduct) => ({
            results: [{
              ...prevProduct.results[0],
              reviews_count: prevProduct.results[0].reviews_count + 1,
            }],
          }));

        setReviews((prevReviews) => ({
            ...prevReviews, 
            results: [newReview, ...prevReviews.results],
            }));

            toggle();
        } catch (error) {
            setErrors(error.response?.data);   
        }        
    };
    
  return (
            
    currentUser ? (
        formToggle? (
            <Card className="border-0">
            <Card.Header className={`${reviewStyles.cardHeader} d-flex border-0 p-0 justify-content-start`}>
                <Card.Img 
                    src={currentUser.profile_image} 
                    alt={currentUser.username}
                    className={reviewStyles.avatar}
                />            
                <Card.Text className={reviewStyles.username}>{currentUser.username}</Card.Text>
                <Button onClick={toggle} variant="link" className={`${reviewStyles.formClose} ml-auto my-auto mr-2`}><i class="fa-solid fa-xmark"></i></Button>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
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
                            <option value="0">How would you rate this product?</option>
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

                    <Button type="submit"  className={reviewStyles.Button}>
                        Submit
                    </Button>
                    {errors.non_field_errors?.map((message, idx) =>
                    <Alert variant='warning' key={idx}>{message}</Alert>
                    )}
                </Form>
            </Card.Body>
        </Card>

        ) : (
            <Button onClick={toggle} className={reviewStyles.Button}>Leave a review</Button>
        )

    ) : (
        <Link to="/login">
            <Button onClick={toggle} className={reviewStyles.Button}>Login to leave a review</Button>
        </Link>
        
    )         
  )
}

export default ReviewForm