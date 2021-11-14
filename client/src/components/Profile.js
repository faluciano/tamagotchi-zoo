import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
    Container,
    Row,
    Image,
    Col,
} from 'react-bootstrap'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && user && (
            <Container>
                <Row>
                    <Col>
                        <Image src={user.picture} />
                    </Col>
                    <Col>
                        <h2>{user.name}</h2>
                    </Col>
                </Row>
            </Container>
        )
    );
}

export default Profile;