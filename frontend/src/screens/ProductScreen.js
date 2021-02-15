import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`)

      //   console.log(data)
      setProduct(data)
    }

    fetchProducts()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row className='justify-content-md-center  mb-5'>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <strong>
                <h3>{product.name}</h3>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
                <h5>{product.price}</h5>
              </strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{product.description}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
