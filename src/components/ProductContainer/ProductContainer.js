import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import Product from "../Product/Product";
import path from "../../utils/path"

const ProductContainer = ( { socket } ) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get( path + '/products', {})
    .then(function (response) {
        console.log(response.data);
        setProducts(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
  }, []);

  return (
    <Container>
      <Row className="w-100">
        { products.length > 0 && products.map( (product) => {return <Product product={product} key={product._id} />}) }
      </Row>
    </Container>
  );
}

export default ProductContainer;