import React from 'react';
import Navbar from '../Header/Header';
import Footer from '../../pages/Footer/Footer';

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultComponent;
