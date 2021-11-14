import {
    Container,
    Row,
    Col,
    Button,
    ButtonToolbar,
} from 'react-bootstrap'

const AnimalInteractControls = ({ userAnimal }) => {
    const render = userAnimal !== undefined;

    return (
        render && (
            <Container fluid className='py-4'>
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
        )
    );
}

export default AnimalInteractControls;