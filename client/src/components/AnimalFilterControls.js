import {
    Container,
    Button,
    Row,
    Col,
} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';

import ZipCodeInput from './AnimalFilterControls/ZipCodeInput';
import SpeciesDropdown from './AnimalFilterControls/SpeciesDropdown';

const AnimalFilterControls = ({ zipCode, setZipCode, selectedSpecies, setSelectedSpecies, id, userAnimal, setUserAnimal, species }) => {
    const { isAuthenticated, user } = useAuth0();

    const render = isAuthenticated && user && userAnimal === undefined;

    const createAnimal = () => {
        fetch('/createAnimal', {
            method: 'POST',
            body: new URLSearchParams({
                id: id,
                postal: zipCode,
                preference: selectedSpecies,
            }).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(createResponse => createResponse.json())
            .then(createJSON => {
                setUserAnimal(createJSON);
            });
    };

    const handleClick = (e) => {
        createAnimal();
    };

    return (
        render && (
            <Container>
                <Row>
                    <ZipCodeInput zipCode={zipCode} setZipCode={setZipCode} />
                </Row>
                <Row className='mt-2 flex-nowrap'>
                    <Col>
                        <SpeciesDropdown selectedSpecies={selectedSpecies} setSelectedSpecies={setSelectedSpecies} species={species} />
                    </Col>
                    <Col>
                        <Button className='d-block' style={{ marginLeft: 'auto' }} onClick={handleClick}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        )
    );
}

SpeciesDropdown.defaultProps = {
    species: ['Dog', 'Cat'],
}

export default AnimalFilterControls;