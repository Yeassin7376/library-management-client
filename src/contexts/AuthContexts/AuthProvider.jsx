import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const user = {
        user : 'ujxnjnwn'
    }


    const authValues ={
        user
    }

    return (
        <AuthContext value={authValues}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;