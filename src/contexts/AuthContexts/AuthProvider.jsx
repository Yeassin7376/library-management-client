import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authValues = {
    user,
    setUser,
    createUser,
    loginUser,
    googleLogin,
    updateUser,
    logoutUser
  };

  return <AuthContext value={authValues}>{children}</AuthContext>;
};

export default AuthProvider;
