import {
    Offcanvas,
    ListGroup,
    Carousel,
    Image,
} from 'react-bootstrap'

const AnimalOffcanvas = ({ offcanvasShow, setOffcanvasShow, animal }) => {

    const handleClose = () => {
        setOffcanvasShow(false);
    };

    const carouselItems = animal?.photos.map((src, i) =>
        <Carousel.Item key={i}>
            <Image className='d-block w-100' src={src} />
        </Carousel.Item>
    );

    return (
        <Offcanvas show={offcanvasShow} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Hi, I am a real animal and up for adoption!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Offcanvas.Title>If you want to adopt me, all of my contact info can be found below:</Offcanvas.Title>
                <ListGroup>
                    <Carousel>
                        {carouselItems}
                    </Carousel>
                    {animal?.species !== null && <ListGroup.Item>Species: {animal?.species}</ListGroup.Item>}
                    {animal?.name !== null && <ListGroup.Item>Real name: {animal?.original_name}</ListGroup.Item>}
                    {animal?.gender !== null && <ListGroup.Item>Gender: {animal?.gender}</ListGroup.Item>}
                    {animal?.species !== null && <ListGroup.Item>Species: {animal?.species}</ListGroup.Item>}
                    {animal?.age !== null && <ListGroup.Item>Age range: {animal?.age}</ListGroup.Item>}
                    {animal?.contact?.address?.address1 !== null && <ListGroup.Item>Address Line 1: {animal?.contact?.address?.address1}</ListGroup.Item>}
                    {animal?.contact?.address?.address2 !== null && <ListGroup.Item>Address Line 2: {animal?.contact?.address?.address2}</ListGroup.Item>}
                    {animal?.contact?.address?.city !== null && <ListGroup.Item>City: {animal?.contact?.address?.city}</ListGroup.Item>}
                    {animal?.contact?.address?.state !== null && <ListGroup.Item>State: {animal?.contact?.address?.state}</ListGroup.Item>}
                    {animal?.contact?.address?.postcode !== null && <ListGroup.Item>Zip Code: {animal?.contact?.address?.postcode.split('-')[0].substring(1)}</ListGroup.Item>}
                    {animal?.contact?.address?.country !== null && <ListGroup.Item>Country: {animal?.contact?.address?.country}</ListGroup.Item>}
                    {animal?.contact?.email !== null && <ListGroup.Item>Email: {animal?.contact?.email}</ListGroup.Item>}
                    {animal?.contact?.phone !== null && <ListGroup.Item>Phone: {animal?.contact?.phone}</ListGroup.Item>}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default AnimalOffcanvas;