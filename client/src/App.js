import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <Container fluid>
          <Button>Test Button</Button>
          <Alert variant="primary">Test Alert</Alert>
          <Breadcrumb>
            <Breadcrumb.Item>Item 1</Breadcrumb.Item>
            <Breadcrumb.Item>Item 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Item 3</Breadcrumb.Item>
          </Breadcrumb>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                  <Form.Text className="text-muted">Adipisicing do labore Lorem sint proident aute incididunt ipsum voluptate velit sunt enim duis.</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container> */}

        
      </header>

      <Header className="App-header"/>

        <Container>
          <Card className="mb-3" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200/100" />
            <Card.Body>
              <Card.Title>Animal</Card.Title>
              <Card.Text>Name: Test</Card.Text>
              <Card.Text>Species: Test</Card.Text>
            </Card.Body>
          </Card>
        </Container>

        <Footer />
    </div >
  );
}

export default App;
