import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Img from './img/img.png';
// import './style.scss';

const Bootstrap = () => (
  <main className="bootstrap">
    <Container>
      <Helmet title='Bootstrap page' />
      <h1>Bootstrap page</h1>
      <Row>
        <Col sm={6}>
          <Card>
            <CardImg top width="100%" src={Img} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm={6}>
          <Card>
            <CardImg top width="100%" src={Img} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>

      </Row>

    </Container>
  </main>
);

export default Bootstrap;
