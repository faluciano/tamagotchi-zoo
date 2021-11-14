import { useAuth0 } from '@auth0/auth0-react';
import {
    Container,
    Image,
} from 'react-bootstrap'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const name = user?.name.split('@')[0];

    return (
        isAuthenticated && user && (
            <Container className="d-flex align-items-center ml-auto">
                <Image src={user.picture} className="d-inline rounded-circle" style={{ width: '3rem', marginRight: '1rem' }} />
                <h2>{name}</h2>
            </Container >
        )
    );
}

export default Profile;