import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, Row, Col, Spinner, Button, Modal, Alert } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import listStyles from "../../styles/ProductList.module.css"
import ProductRating from '../../components/ProductRating';


const ProductList = () => {
  const [products, setProducts] = useState({ results: [] });

  const [hideAlert, setHideAlert] = useState(false);

  const [modalToggle, setModalToggle] = useState(false)
  const toggle = () => {
    setModalToggle(!modalToggle)
    setHideAlert(true)
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
      {!hideAlert && products.results.length > 0 && (
      <Alert variant="success" className='m-0 p-2'>
        <Alert.Heading className='m-0'>Ahh! You made it!</Alert.Heading >
        <p className='m-0'>
        To get started, click the '+' icon located in the corner of a 
        product card to add it to the comparison. Next, choose another 
        product you wish to compare it with. Once you've selected two products 
        the 'Compare' button appears.
        </p>
      </Alert>
      )}

        <h1 className="d-none">Board Games</h1>
        {products.results.length? (
          <>
          {products.results.map((product) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3} className="mb-1 p-1 d-flex flex-column">
            <Card  className={`${appStyles.Content} ${listStyles.Card} p-2 d-flex flex-column position-relative`}>
            {modalProducts.some((modalProduct) => modalProduct.id === product.id) ? (
              <span className={`${listStyles.Button} ${listStyles.compareIcon} position-absolute m-0`}>
                <i className="fa-solid fa-check p-0"></i>
              </span>              
            ) : (
              <Button onClick={() => addToModal(product)} className={`${listStyles.Button} ${listStyles.compareIcon} position-absolute m-0`}>
                <i class="fa-solid fa-plus p-0"></i>
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
            <Modal.Body className={listStyles.modalBody}>
             <Row className="g-2">
              {modalProducts.map((product) => (
              <Col key={product.id} xs={6} className='p-1'>
                  <img src={product.product_image} alt={product.image_alt} className={listStyles.img} />
                  <p className='mb-0 mt-1'><b>{product.name}</b></p>
                  <ProductRating id={product.id} reviewsCount={product.reviews_count} />
                  <p>£{product.price}</p>
                  <p>
                  {product.description.split('  ').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  </p>
                </Col>
              ))}
              </Row>             
            </Modal.Body>               
          </Modal.Dialog>
        )}
          
          {modalProducts.length === 2 && 
          <Button 
          onClick={toggle}
          className={`${listStyles.Button} ${listStyles.modalToggle} position-fixed m-0`}>
              {modalToggle === true? 'Close' : 'Compare' }              
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


