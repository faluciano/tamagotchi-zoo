import {
    Container,
} from 'react-bootstrap'

import Logo from './header/Logo';
import Title from './header/Title';
import Profile from './header/Profile';
import LoginButton from './header/LoginButton';
import LogoutButton from './header/LogoutButton';


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