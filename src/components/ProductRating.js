import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';
import detailStyles from '../styles/ProductDetail.module.css'

const ProductRating = (props) => {
  const { id, reviewsCount } = props;
  const [reviews, setReviews] = useState({ results: [] });

  const productReviews = reviews.results.filter((review) => review.product_id === parseInt(id));
  const rating = productReviews.length ? Math.round(productReviews
  .reduce((acc, review) => acc += parseInt(review.rating), 0) / productReviews.length) : 0;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const {data: reviews} = await axiosReq.get(`/reviews/`);
        setReviews(reviews);
      } catch (error) {         
      }
    };

    handleMount();
  }, []);   

    
  return (
    <>
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