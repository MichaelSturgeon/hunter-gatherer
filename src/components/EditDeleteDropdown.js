// Imports
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import reviewStyles from "../styles/Reviews.module.css"
import { axiosRes } from "../api/axiosDefaults";
// Ellipsis component - renders the ellipsis icon and handles the onClick event
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
// EditDeleteDropdown component - provides a dropdown menu for editing or deleting reviews
const EditDeleteDropdown = (props) => {    
    const { reviewId, setReviews, setProduct, toggle } = props;
    // Function to handle review deletion
    const handleDelete = async () => {
        try {
          // Sending a DELETE request to delete the review using the reviewId
          await axiosRes.delete(`/reviews/${reviewId}/`);
          // Update the product's reviews count after deleting the review          
          setProduct((prevProduct) => ({
            results: [{
              ...prevProduct.results[0],
              reviews_count: prevProduct.results[0].reviews_count - 1,
            }],
          }));
          // Update the list of reviews to remove the deleted review    
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
         {/* Edit option in the dropdown */}
        <Dropdown.Item
            className={reviewStyles.reviewEdit}
            onClick={() => toggle(reviewId)}
            aria-label="edit review"
        >
            <i className="fa-solid fa-pencil"/>
        </Dropdown.Item>
        {/* Delete option in the dropdown */}
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