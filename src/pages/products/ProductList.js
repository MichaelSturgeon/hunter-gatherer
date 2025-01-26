import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductList = () => {

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


