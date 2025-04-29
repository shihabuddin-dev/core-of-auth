import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/nav/Nav';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const ValueContext = createContext()

const Root = () => {
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
        handleLogOut

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