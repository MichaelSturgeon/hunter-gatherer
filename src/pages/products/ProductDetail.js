// Imports
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import appStyles from '../../App.module.css'
import detailStyles from '../../styles/ProductDetail.module.css'
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductRating from '../../components/ProductRating';
import ReviewsList from '../reviews/ReviewsList';
// Functional component for ProductDetail
const ProductDetail = () => {
  const {id} = useParams();
  const [products, setProduct] = useState({ results: [] });
  const product = products.results[0];
  const [reviews, setReviews] = useState({ results: [] });
  // useEffect hook to fetch product and reviews data when component mounts or id changes
  useEffect(() => {
    const handleMount = async () => {
      try {
        // Fetching product and reviews data concurrently using Promise.all
        const [{ data: products }, {data: reviews}] = await Promise.all([
          axiosReq.get(`/products/${id}`),
          axiosReq.get(`/reviews/`)
        ]);
        // Set fetched product and reviews data to state
        setProduct({ results: [products] });
        setReviews(reviews);
      } catch (error) {         
      }
    };
    // Calling the function to fetch data
    handleMount();
  },[id]);

  return (
    <Row xs={12}>
      <Col className="my-auto py-2 p-md-2">
        {/* Checking if product data is available, and rendering accordingly */}
        {product? (
        <> 
          {/* Product Image */}         
          <Container key={product.id} className={`${appStyles.Content} mb-2`}>
              <Card.Img
                variant="top"
                src={product.product_image}
                alt={product.image_alt }
                className={detailStyles.img}
                />                           
          </Container>
          {/* Product Information */}            
          <Container className={`${appStyles.Content} mb-2`}>
              <Card.Title className={detailStyles.Header}>{product.name}</Card.Title>
              <Card.Body className="pb-0">
                <Card.Text>
                  <ProductRating id={product.id} reviewsCount={product.reviews_count}/>
                </Card.Text>
                <Card.Text>
                  <a href={product.website} target="_blank" rel="noopener noreferrer">
                    £{product.price} - Visit the official website
                  </a>
                </Card.Text>
                {/* Product Description */}
                <Card.Text>
                {product.description.split('  ').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                </Card.Text>


                <small className="text-muted">Updated: {product.updated_at}</small>
              </Card.Body>                
          </Container>
          {/* Reviews List component to display reviews for the product */}
          <ReviewsList prodId={product.id} reviews={reviews} setReviews={setReviews} setProduct={setProduct}/>
        </>            
        ) : (
          // Loading state if product is not yet available            
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}     
      </Col>
    </Row>
  )
}

export default ProductDetail