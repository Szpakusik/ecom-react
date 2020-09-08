import React from 'react';
import './Product.scss';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Product = (props) => {
  return (
      <Card className="col-md-4">
        <CardImg top src="/logo192.png" alt="Card image cap"  />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  );
};

export default Product;