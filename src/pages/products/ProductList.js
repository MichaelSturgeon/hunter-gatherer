import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, Row, Col, Spinner, Button, Modal } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import listStyles from "../../styles/ProductList.module.css"
import ProductRating from '../../components/ProductRating';


const ProductList = () => {
  const [products, setProducts] = useState({ results: [] });

  const [modalToggle, setModalToggle] = useState(false)
  const toggle = () => {
    setModalToggle(!modalToggle)
  }

  const [modalProducts, setModalProducts] = useState([]);  
  const addToModal = (product) => {
    setModalProducts((prevProducts) => {
      if (prevProducts.length === 2) {
        return [...prevProducts.slice(1), product];
      }
      return [...prevProducts, product];
    });
  };
  
  
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
    <Row  className="d-flex flex-wrap p-1 position-relative">    
        <h1 className="d-none">Board Games</h1>
        {products.results.length? (
          <>
          {products.results.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3} className="mb-1 p-1 d-flex flex-column">
            <Card  className={`${appStyles.Content} ${listStyles.Card} p-2 d-flex flex-column position-relative`}>

            {modalProducts.some((modalProduct) => modalProduct.id === product.id) ? (
              <span className='position-absolute'>
                <i className="fa-solid fa-check"></i>
              </span>
              
            ) : (
              <Button onClick={() => addToModal(product)} className='position-absolute'>
                <i className="fa-solid fa-eye p-0"></i>
              </Button>
            )}
            

              <Link to={`/products/boardgames/${product.id}`} >
                <Card.Img variant="top" src={product.product_image} alt={product.image_alt} className={listStyles.img}/>
              </Link>
              <Card.Body className={`${listStyles.body} p-0`}>
                <Card.Title className="mb-0">{product.name}</Card.Title>
                <Card.Text className="mb-0">
                  <ProductRating id={product.id} reviewsCount={product.reviews_count}/>
                </Card.Text>
                <Card.Text className="mb-0">£{product.price}</Card.Text >
                <small className="text-muted">Updated: {product.updated_at}</small> 
              </Card.Body>  
            </Card>
          </Col>
          ))}

          {modalToggle && (
          <Modal.Dialog className={`${listStyles.Modal} position-fixed`}>            
              <h2>Compare</h2>
            <Modal.Body>                 
              <p>image</p>
              <p>name</p>
              <p>rating</p>
              <p>price</p>
              <p>description</p>
              <Button variant="primary" className={listStyles.Button}>clear</Button>
            </Modal.Body>
               
          </Modal.Dialog>
        )}
          
          {modalProducts.length === 2 && <Button           
           onClick={toggle}
           className={`${listStyles.Button} ${listStyles.modalToggle} position-fixed m-0`}>
            <i className="fa-solid fa-eye p-0"></i>
          </Button>
          }
        </> 
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
    </Row>  
  )
}

export default ProductList


