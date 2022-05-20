import React from 'react';

import { GoogleLogout } from 'react-google-login';

const clientId = '90738848591-loekbqv67cjc9p9k8ak864bn118i5tin.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        console.log('Logout Success');
    }
    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            style={{margin: '50px'}}
            />
        </div>
    );
}
export default Logout;