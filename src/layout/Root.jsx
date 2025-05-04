import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/nav/Nav';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const ValueContext = createContext()

const Root = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    console.log(user)
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSingUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
        });

    }
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // if (currentUser) {
            //   const uid = currentUser.uid;
            //   console.log(uid)

            // }
        });
        return () => {
            unSubscribe()
        }

    }, [])
    const contextValue = {
        user,
        setUser,
        handleLogin,
        handleSingUp,
        handleLogOut,
        createUserWithGoogle

    }
    return (
        <>
            <ValueContext value={contextValue}>
                <Navbar />
                <div className='container mx-auto mt-4 px-4 sm:px-6 md:px-8 lg:px-10'>
                    <Outlet />
                </div>
            </ValueContext>
        </>
    );
};

export default Root;