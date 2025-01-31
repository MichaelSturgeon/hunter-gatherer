import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import reviewStyles from "../styles/Reviews.module.css"
import { axiosRes } from "../api/axiosDefaults";

const Ellipsis = React.forwardRef(({ onClick }, ref) => (

    <i
        className="fa-solid fa-ellipsis"
        ref={ref}
        onClick={(event) => {
        event.preventDefault();
        onClick(event);
        }}
    />  
));

const EditDeleteDropdown = (props) => {    
    const { reviewId, setReviews, setProduct, toggle } = props;

    const handleDelete = async () => {
        try {
          await axiosRes.delete(`/reviews/${reviewId}/`);
          
          setProduct((prevProduct) => ({
            results: [{
              ...prevProduct.results[0],
              reviews_count: prevProduct.results[0].reviews_count - 1,
            }],
          }));
    
          setReviews((prevReviews) => ({
            ...prevReviews,
            results: prevReviews.results.filter((review) => review.id !== reviewId),
          }));
        } catch (error) {            
        }
      };

      

    return (
    <Dropdown className={`${reviewStyles.reviewEdit} ml-auto mr-2`} drop="left">
        <Dropdown.Toggle as={Ellipsis}
        />

        <Dropdown.Menu
        className="text-center d-flex d-flex-row p-0"
        popperConfig={{ strategy: "fixed" }}
        >
        <Dropdown.Item
            className={reviewStyles.reviewEdit}
            onClick={() => toggle(reviewId)}
            aria-label="edit review"
        >
            <i className="fa-solid fa-pencil"/>
        </Dropdown.Item>
        <Dropdown.Item
            className={reviewStyles.reviewEdit}
            onClick={handleDelete}
            aria-label="delete review"
        >
            <i className="fa-regular fa-trash-can" />
        </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default EditDeleteDropdown