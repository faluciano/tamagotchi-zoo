import {
    Container,
    Row,
    Col,
    Button,
    ButtonToolbar,
} from 'react-bootstrap'

const AnimalInteractControls = ({ userAnimal, id }) => {
    const render = userAnimal !== undefined;
    function feed(){
        fetch(`/feed?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
                console.log( createJSON.accepted ? "Fed" : "Too full")
            });
    }
    function pet(){
        fetch(`/pet?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
                console.log( createJSON.accepted ? "Pet" : "Too happy")
            });
    }
    function clean(){
        fetch(`/clean?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
                console.log( createJSON.accepted ? "Clean" : "Too clean")
            });
    }

    return (
        render && (
            <Container fluid className='py-4'>
                <ButtonToolbar>
                    <Row xs={12} className='mx-auto'>
                        <Col>
                            <Button onClick={()=>pet()} className='fs-4'>Pet</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>feed()} className='fs-4'>Feed</Button>
                        </Col>
                        <Col>
                            <Button onClick={()=>clean()} className='fs-4'>Clean</Button>
                        </Col>
                    </Row>
                </ButtonToolbar>
            </Container>
        )
    );
}

export default AnimalInteractControls;