import React, { useState } from 'react';
import axios from 'axios';
import './Product.scss';
import path from "../../utils/path"
import {
  Card, CardImg, CardBody, CardText, InputGroupAddon, InputGroup, Input,
  CardTitle, Button, Col
} from 'reactstrap';

const Product = ( {product} ) => {

  const [quantity, setQuantity] = useState( 0 );
  
  const handleSendClick = () => {
    axios.post( path + '/order', {
      productId: product.productId,
      quantity: Number(quantity)
    })
    console.log([product.productId, Number(quantity)]);
  }

  const handleAmountChange = (e) => {
    setQuantity(e.target.value)
  }
  return (
    <Col className="col-sm-6 col-md-4 p-4">
      <Card>
          <CardImg top src="/logo192.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle className="font-weight-bold">{product.name.toUpperCase()}</CardTitle>
            <CardText className="font-weight-bold">{product.price/100} zł</CardText>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input onChange={handleAmountChange} placeholder="Amount" min={0} max={100} type="number" step="1" />
              <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button className="mt-3" onClick={handleSendClick}>Zamów!</Button>
          </CardBody>
      </Card>
    </Col>
  );
};

export default Product;