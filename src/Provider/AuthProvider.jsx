/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
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


    const signOutUser = () => {
        setLoading(true)
        signOut(auth)
    }

    const GoogleProvider = new GoogleAuthProvider();
    const createGoogleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const twitterProvider = new TwitterAuthProvider();
    const createTwitterUser = () => {
        setLoading(true)
        return signInWithPopup(auth, twitterProvider)
    }

    const facebookProvider = new FacebookAuthProvider();
    const createFacebookUser = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
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
        createTwitterUser,
        createFacebookUser,
        createGithubUser,
        createGoogleUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;