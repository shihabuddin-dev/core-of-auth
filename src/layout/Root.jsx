import React, { createContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/nav/Nav';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const ValueContext = createContext()

const Root = () => {

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSingUp=(email,password)=>{
        return  createUserWithEmailAndPassword(auth, email, password)
    }
    const contextValue={
        handleLogin,
        handleSingUp
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