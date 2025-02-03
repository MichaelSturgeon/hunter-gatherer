// Imports
import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';
import detailStyles from '../styles/ProductDetail.module.css'

const ProductRating = (props) => {
  const { id, reviewsCount } = props;
  const [reviews, setReviews] = useState({ results: [] });
  // Filter reviews to get only the reviews for the current product using product ID
  const productReviews = reviews.results.filter((review) => review.product_id === parseInt(id));
  // Calculate the average rating for the product (rounded to the nearest integer)
  const rating = productReviews.length ? Math.round(productReviews
  .reduce((acc, review) => acc += parseInt(review.rating), 0) / productReviews.length) : 0;
  // useEffect hook to fetch reviews when the component mounts
  useEffect(() => {
    // Flag to check if component is mounted
    let isMounted = true;
    const handleMount = async () => {
      try {
        // Fetching all reviews from the API
        const {data: reviews} = await axiosReq.get(`/reviews/`);
        // Setting the reviews data in the state
        if (isMounted) {
          setReviews(reviews);
        }
      } catch (error) {         
      }
    };
    handleMount();
    // Cleanup on unmount
    return () => {
      isMounted = false; 
    };
  }, []);
    
  return (
    <>
    {/* If there's a rating, display stars; otherwise, display "No rating available" */}
    {rating > 0 ? 
          <span className={detailStyles.stars} >                        
            {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fa-solid fa-star p-0"></i>
            ))}
            ({reviewsCount})                          
          </span>
        :
          <span>No rating available</span>
        }
    </>
  )
}

export default ProductRating