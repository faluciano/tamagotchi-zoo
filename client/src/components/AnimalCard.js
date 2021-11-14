import {
    Card,
    Button,
} from 'react-bootstrap'
//import dog from '../image/dog_stand_look4.gif'

const AnimalCard = ({ setOffcanvasShow, animal }) => {
    const render = animal !== undefined;
    // function image(){
    //     const map = {
    //         'dog': dog,
    //         'cat': '/cat/cat_stand_catrunx2.gif',
    //         'bird': '/chicken/chickenfrontwalkx4.gif'
    //     }
    //     return map[animal.species.toLowerCase()];
    // }
    return (
        render && (
            <Card className='mx-auto' style={{ maxWidth: '28rem' }}>
                <Card.Img src="https://picsum.photos/200/100" />
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