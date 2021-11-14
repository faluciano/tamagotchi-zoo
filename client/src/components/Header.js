import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

import Profile from './Profile';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = () => {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col>
                        <Profile />
                    </Col>
                    <Col>
                        <LoginButton />
                        <LogoutButton />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;