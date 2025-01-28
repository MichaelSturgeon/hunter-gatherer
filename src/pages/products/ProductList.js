import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import ProductRating from '../../components/ProductRating';

const ProductList = () => {

  const [products, setProducts] = useState({ results: [] });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axiosReq.get(`/products/`);
        setProducts(data);
        
      } catch (error) {        
      }
    };
    
    fetchProducts();
  }, []);


  return (
    <Row xs={12}>
      <Col className="my-auto py-2 p-md-2" lg={3}>
        <h1 className="d-none">Board Games</h1>
        {products.results.length? (
          products.results.map((product) => (
            <Card key={product.id} className={`${appStyles.Content} mb-3`}>
              <Link to={`/products/boardgames/${product.id}`}>
                <Card.Img variant="top" src={product.product_image} alt={product.image_alt} />
              </Link>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <ProductRating id={product.id} reviewsCount={product.reviews_count}/>
                </Card.Text>
                <Card.Text>£{product.price}</Card.Text>
                <small className="text-muted">Last Updated: {product.updated_at}</small> 
              </Card.Body>  
            </Card>
          ))
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Col>
    </Row>    
  )
}

export default ProductList


