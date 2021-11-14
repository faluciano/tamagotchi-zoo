import React from 'react';
import {
    Row,
    Col,
    Button,
    ButtonToolbar,
    Container,
} from 'react-bootstrap'

const Controls = () => {
    return (
        <Container fluid>
            <ButtonToolbar>
                <Row xs={12} className='mx-auto'>
                    <Col>
                        <Button className='fs-4'>Pet</Button>
                    </Col>
                    <Col>
                        <Button className='fs-4'>Feed</Button>
                    </Col>
                    <Col>
                        <Button className='fs-4'>Clean</Button>
                    </Col>
                </Row>
            </ButtonToolbar>
        </Container>
    );
}

export default Controls;