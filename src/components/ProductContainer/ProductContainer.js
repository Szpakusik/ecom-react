import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Product from "../Product/Product"

const ProductContainer = (props) => {
  return (
    <Container>
      <Row className="w-100">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </Container>
  );
}

export default ProductContainer;