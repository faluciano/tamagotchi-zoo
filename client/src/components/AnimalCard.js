import {
    Card,
    Button,
} from 'react-bootstrap'
import dog from '../image/dog_stand_lookx4.gif';
import cat from '../image/catwalkx4.gif';
import bird from '../image/chickenprofilepeckx4.gif';

const AnimalCard = ({ setOffcanvasShow, animal }) => {
    const render = animal !== undefined;
    function image(){
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
                    {animal?.name !== null && <Card.Title className='mt-2 mb-4 text-center'>Name: {animal?.name}</Card.Title>}
                    {animal?.gender !== null && <Card.Text style={{marginLeft:'2rem'}}>Gender: {animal?.gender}</Card.Text>}
                    {animal?.species !== null && <Card.Text style={{marginLeft:'2rem'}}>Species: {animal?.species}</Card.Text>}
                    {animal?.age !== undefined && <Card.Text style={{marginLeft:'2rem'}}>Age: {animal?.age}</Card.Text>}
                    <Button style={{marginLeft:'1rem'}} onClick={() => setOffcanvasShow(true)}>Adopt me!</Button>
                </Card.Body>
            </Card >
        )
    );
}

export default AnimalCard;