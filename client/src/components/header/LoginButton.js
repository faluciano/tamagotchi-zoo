import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap'

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    return (
        !isAuthenticated && !user && (
            <Button className='text-nowrap' style={{ marginLeft: 'auto' }} onClick={() => loginWithRedirect()}>
                Log In
            </Button>
        )
    );
}

export default LoginButton;