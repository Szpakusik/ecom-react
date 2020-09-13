import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.scss';
import path from "../../utils/path"
import {
  Card, CardImg, CardBody, CardText, InputGroupAddon, InputGroup, Input,
  CardTitle, Button, Col
} from 'reactstrap';

const Product = ( {product, socket} ) => {

  const [stock, setStock] = useState(product.stock)

  const [disabledStatus, setDisabled] = useState("")

  const [quantity, setQuantity] = useState( 0 );

  useEffect(() => {
    if( stock < 1 ) setDisabled("disabled")
    if( stock > 0 ) setDisabled("")
  });

  socket.on("product.decrease", (data) => {

    if (product.productId === data.payload.productId){
      setStock(data.payload.stock)
    }
  })
  
  const handleSendClick = () => {
    axios.post( path + '/order', {
      productId: product.productId,
      quantity: Number(quantity)
    }).then( (res) => {
      console.log(res);
      setStock(res.data.payload.stock)
    })
    console.log([product.productId, Number(quantity)]);
  }

  const handleAmountChange = (e) => {
    setQuantity(e.target.value)
  }
  return (
    <Col className="col-sm-6 col-md-4 p-4">
      <Card>
          <CardImg top src="/noimg.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle className="font-weight-bold">{product.name.toUpperCase()}</CardTitle>
            <CardText className="font-weight-bold">{product.price/100} zł</CardText>
            <CardText className="font-weight-bold">Stan magazynowy: {stock}</CardText>
            <InputGroup>
              <Input onChange={handleAmountChange} placeholder="Amount" min={0} max={100} type="number" step="1" />
            </InputGroup>
            <Button className="mt-3" disabled={disabledStatus} onClick={handleSendClick}>Zamów!</Button>
          </CardBody>
      </Card>
    </Col>
  );
};

export default Product;