import {
    Card,
} from 'react-bootstrap'

const AnimalCard = ({ animal }) => {
    return (
        <Card className='mx-auto' style={{ maxWidth: '32rem' }}>
            <Card.Img src="https://picsum.photos/200/100" />
            <Card.Body>
                <Card.Title>Name: {animal?.name}</Card.Title>
                <Card.Text>Species: {animal?.species}</Card.Text>
                <Card.Text>Age: {animal?.age}</Card.Text>
                <Card.Text>Contact Info: &lt;Contact Info Here&gt;</Card.Text>
            </Card.Body>
        </Card >
    );
}

export default AnimalCard;