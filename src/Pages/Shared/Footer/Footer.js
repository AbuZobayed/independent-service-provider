import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark footer mt-4'>
            <footer className='text-center '>
            <p><small className='text-white '>copyright &copy; {year}</small></p>
            <p><small className='text-white'>Zobayed Hossen</small></p>
        </footer>
        </div>
    );
};

export default Footer;