import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
    <Card>
      <Link>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Link>                
      <Card.Body>
        <Card.Text>                    
            <Card.Title>Name</Card.Title>                      
            <Card.Text>Rating</Card.Text>
            <Card.Text>Price</Card.Text>                    
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last Updated</small>
      </Card.Footer>
    </Card>          
          
  )
}

export default ProductList


