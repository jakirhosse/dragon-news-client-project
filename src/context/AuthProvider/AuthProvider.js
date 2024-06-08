import React, { useEffect, useState, createContext } from 'react';
import { app } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   const [loading,setLoading] = useState(true)
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    };

    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('currentUser', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        providerLogin,
        createuser,
        logOut,
        signIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
