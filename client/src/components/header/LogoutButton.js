import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap'

const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && user && (
            <Button className='text-nowrap' onClick={() => logout({
                returnTo: window.location.origin,
            })}>
                Log Out
            </Button>
        )
    );
}

export default LogoutButton;