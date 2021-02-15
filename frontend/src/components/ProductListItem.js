import React from 'react'

import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const ProductListItem = ({ p }) => {
  return (
    <Container className='justify-content-md-center'>
      <Card className=' mb-5'>
        <Link to={`/products/${p._id}`}>
          <Card.Img className='card-img-top' src={p.image} alt='' />
        </Link>
        <Card.Body>
          <Link to={`/products/${p._id}`}>
            <Card.Title as='div'>
              <strong>
                <h4 className='serial-links'>{p.name}</h4>
              </strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductListItem
