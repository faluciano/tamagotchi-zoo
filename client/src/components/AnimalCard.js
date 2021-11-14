import {
    Card,
} from 'react-bootstrap'

const AnimalCard = ({ animal }) => {
    const render = animal !== undefined;

    return (
        render && (
            <Card className='mx-auto' style={{ maxWidth: '28rem' }}>
                <Card.Img src="https://picsum.photos/200/100" />
                <Card.Body>
                    {animal?.name !== undefined && <Card.Title className='mt-2 mb-4 text-center'>Name: {animal?.name}</Card.Title>}
                    {animal?.species !== undefined && <Card.Text style={{marginLeft:'2rem'}}>Species: {animal?.species}</Card.Text>}
                    {animal?.age !== undefined && <Card.Text style={{marginLeft:'2rem'}}>Age: {animal?.age}</Card.Text>}
                </Card.Body>
            </Card >
        )
    );
}

export default AnimalCard;