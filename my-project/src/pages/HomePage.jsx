import React from 'react';
import Header from '../components/Header';
import Tarjetas from '../components/Tarjetas';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
                <Tarjetas />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
