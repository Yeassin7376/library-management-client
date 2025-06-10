import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='min-h-[calc(100vh-243px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;