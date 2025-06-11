import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedInfo) =>{
        return updateProfile(auth.currentUser, updatedInfo)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=> unsubscribe()
    }, [])


    const authValues ={
        user,
        setUser,
        createUser,
        loginUser,
        updateUser
    }

    return (
        <AuthContext value={authValues}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;