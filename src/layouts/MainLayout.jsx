import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className=' sticky top-0 left-0 right-0 z-50'>
                <Header></Header>
            </header>
            <main className='min-h-[calc(100vh-243px)] px-3 md:px-10 lg:px-20'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;