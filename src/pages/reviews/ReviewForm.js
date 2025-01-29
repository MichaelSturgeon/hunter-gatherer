import React from 'react'
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Alert, Button, Image, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ReviewForm = () => {

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;

  return (
            <>
            <Image
            src={profile_image}
            alt={currentUser}            
            />
            <Link exact >
                <p className="mb-0">Current User</p>
            </Link>
            <Form> 
                <Form.Label className="my-1 mr-2 d-none">Rating</Form.Label>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                >
                    <option value="0">How would you rate this product?</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Control>                

                <Form.Group controlId="content">
                    <Form.Label className="d-none">Review Content</Form.Label>
                    <Form.Control                    
                    type="text" 
                    placeholder="What should customers know?" 
                    name="content"/>
                </Form.Group>                

                <Button  type="submit">
                    Submit
                </Button>                
            </Form>
            </>
            
  )
}

export default ReviewForm