import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/nav/Nav';

const Root = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto mt-4 px-4 sm:px-6 md:px-8 lg:px-10'>
                <Outlet />
            </div>
        </>
    );
};

export default Root;