import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <Container fluid>
                <Row>
                    <Col>
                        <p>Felix Luciano Salomon</p>
                    </Col>
                    <Col>
                        <p>Camilo Lima Castro</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;