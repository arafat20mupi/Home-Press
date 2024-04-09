/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,  GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const updateUser = (userData) => {
        setLoading(false);
        return updateProfile(auth.currentUser, userData);
    };
    
    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }

    const GoogleProvider = new GoogleAuthProvider();
    const createGoogleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const createGithubUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        createUser,
        setUser,
        user,
        signOutUser,
        signInUser,
        loading,
        createGithubUser,
        createGoogleUser,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;