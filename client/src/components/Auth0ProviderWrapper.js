import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWrapper = ({ of }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_CLIENT_ID;

    const handleRedirectCallback = () => {
        // Do nothing for now...
        // Just in case login callback is needed
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={handleRedirectCallback}
        >
            {of}
        </Auth0Provider>
    );
};

export default Auth0ProviderWrapper;