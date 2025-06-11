import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedInfo) =>{
        return updateProfile(auth.currentUser, updatedInfo)
    }


    const authValues ={
        user,
        setUser,
        createUser,
        updateUser
    }

    return (
        <AuthContext value={authValues}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;