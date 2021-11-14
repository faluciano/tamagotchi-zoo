import {
    Container,
    Row,
    Col,
    Button,
    ButtonToolbar,
} from 'react-bootstrap'

const AnimalInteractControls = () => {
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

export default AnimalInteractControls;