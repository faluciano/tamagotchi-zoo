import { useState } from 'react';
import {
    Card,
    Button,
    InputGroup,
    FormControl,
} from 'react-bootstrap'
import dog from '../image/dog_stand_lookx4.gif';
import cat from '../image/catwalkx4.gif';
import bird from '../image/chickenprofilepeckx4.gif';

const AnimalCard = ({ id, setOffcanvasShow, animal }) => {
    const [readOnly, setReadOnly] = useState(true);
    const [name, setName] = useState(animal?.name);

    const toggleReadOnly = () => {
        setReadOnly(!readOnly);
    }

    console.log(animal);

    const changeAnimalName = () => {
        fetch(`/changeName?id=${id}&name=${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(changeNameResponse => changeNameResponse.json())
            .then(changeNameJSON => {
                console.log(changeNameJSON);
            });
    };

    const handleClick = (e) => {
        toggleReadOnly();
        if (!readOnly) {
            changeAnimalName();
        }
    }

    const render = animal !== undefined;

    function image() {
        const map = {
            'dog': dog,
            'cat': cat,
            'bird': bird,
            'rabbit': cat,
            'horse': dog,
            'bardyard': bird,
            'scales, fins & other': bird
        }
        return map[animal.species.toLowerCase()];
    }

    return (
        render && (
            <Card className='mx-auto' style={{ maxWidth: '28rem' }}>
                <Card.Img src={image()} />
                <Card.Body>
                    <InputGroup className='mb-3'>
                        <Button onClick={handleClick}>Name: </Button>
                        <FormControl readOnly={readOnly} value={name ? name : animal?.name} onChange={(e) => setName(e.target.value)} />
                    </InputGroup>
                    {animal?.gender !== null && <Card.Text style={{ marginLeft: '2rem' }}>Gender: {animal?.gender}</Card.Text>}
                    {animal?.species !== null && <Card.Text style={{ marginLeft: '2rem' }}>Species: {animal?.species}</Card.Text>}
                    {animal?.age !== undefined && <Card.Text style={{ marginLeft: '2rem' }}>Age: {animal?.age}</Card.Text>}
                    <Button style={{ marginLeft: '1rem' }} onClick={() => setOffcanvasShow(true)}>Adopt me!</Button>
                </Card.Body>
            </Card >
        )
    );
}

export default AnimalCard;