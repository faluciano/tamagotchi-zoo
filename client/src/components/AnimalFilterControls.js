import {
    Container,
    Button,
    Row,
    Col,
} from 'react-bootstrap'

import ZipCodeInput from './AnimalFilterControls/ZipCodeInput';
import SpeciesDropdown from './AnimalFilterControls/SpeciesDropdown';

const AnimalFilterControls = ({ species }) => {
    return (
        <Container>
            <Row>
                <ZipCodeInput />
            </Row>
            <Row className='mt-2 flex-nowrap'>
                <Col>
                    <SpeciesDropdown species={species} />
                </Col>
                <Col>
                    <Button className='d-block' style={{ marginLeft: 'auto' }}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

SpeciesDropdown.defaultProps = {
    species: ['Dog', 'Cat'],
}

export default AnimalFilterControls;