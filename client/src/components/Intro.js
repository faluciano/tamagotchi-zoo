import {
    Container,
} from 'react-bootstrap'

import { useAuth0 } from '@auth0/auth0-react';

const Intro = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        (!isAuthenticated || !user) && <header className="my-1">
            <Container fluid className='mx-auto py-4'>
                <h3 className='text-center'>Welcome</h3>
                <p className='text-center'>
                    Please Log In or Sign Up to receive your own pet and take care of it.
                    Feel free to visit our GitHub profiles.
                </p>
                    <a href='https://github.com/crlimacastro' className='d-flex align-items-center text-decoration-none my-4'><img src='GitHub-Mark-64px.png' style={{ width: '3rem', marginLeft: '4rem', marginRight: '1rem' }}></img> <h4>Camilo Lima Castro</h4></a>
                    <a href='https://github.com/faluciano' className='d-flex align-items-center text-decoration-none my-4'><img src='GitHub-Mark-64px.png' style={{ width: '3rem', marginLeft: '4rem', marginRight: '1rem' }}></img><h4>Felix Luciano Salomon</h4></a>
            </Container>
        </header>
    );
}

export default Intro;