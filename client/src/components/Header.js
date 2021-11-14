import {
    Container,
} from 'react-bootstrap'

import Logo from './Header/Logo';
import Title from './Header/Title';
import Profile from './Header/Profile';
import LoginButton from './Header/LoginButton';
import LogoutButton from './Header/LogoutButton';


const Header = () => {
    return (
        <header className="my-1">
            <Container className='d-flex align-items-center flex-nowrap my-3'>
                <Logo />
                <Title />
            </Container>
            <Container className='d-flex align-items-center flex-nowrap my-4'>
                <Profile />
                <LoginButton />
                <LogoutButton />
            </Container>
        </header>
    );
}

export default Header;