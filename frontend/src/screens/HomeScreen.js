import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container, Spinner } from 'react-bootstrap'
import ProductListItem from '../components/ProductListItem'

const HomeScreen = () => {
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/products`)
      .then((response) => {
        setProducts(response.data)
        // console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (loading) {
    return <Spinner animation='grow' />
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Coffee Coffee!</h1>
            <p>Put your order in!</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <section className='cards'>
              {products.products.map((p, _id) => (
                <ProductListItem key={_id} p={p} />
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
