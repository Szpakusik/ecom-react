import React from 'react';
import './Product.scss';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

const Product = (props) => {
  return (
    <Col className="col-sm-6 col-md-4 p-4">
      <Card>
          <CardImg top src="/logo192.png" alt="Card image cap"  />
          <CardBody>
            <CardTitle className="font-weight-bold">Card title</CardTitle>
            <Button>Button</Button>
          </CardBody>
      </Card>
    </Col>
  );
};

export default Product;