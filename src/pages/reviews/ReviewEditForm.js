import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';

const ReviewEditForm = (props) => {
    const { toggle } = props;
  return (    
    <>
        <Card className="border-0">            
            <Card.Body>
                <Form 
                // onSubmit={handleSubmit}
                >
                    <Form.Group controlId="content">
                        <Form.Label className="d-none">Rating</Form.Label>
                        <Form.Control 
                            size='lg'                       
                            as="select"                   
                            name="rating"
                            // value={rating}
                            // onChange={handleChange}
                            custom
                        >
                            <option value="0">How would you rate this product?</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Control>                        
                    </Form.Group>                
                    

                    <Form.Group controlId="content">
                        <Form.Label className="d-none">Review Content</Form.Label>
                        <Form.Control                        
                            as="textarea"
                            rows={5}
                            placeholder="What should customers know?"
                            name="content"
                            // value={content}
                            // onChange={handleChange}
                        />
                    
                    </Form.Group>                
                    <Button  onClick={() => toggle()} type="button">Close Form</Button>

                    <Button type="submit">
                        Submit
                    </Button>
                    
                </Form>
            </Card.Body>
        </Card>        
    </>
   ); 
};      

export default ReviewEditForm