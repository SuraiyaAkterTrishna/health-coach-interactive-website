import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
            <footer className='container text-secondary text-center'>
                <p>Copyright @{getCurrentYear()} | Health Coach. All Rights Reserved</p>
            </footer>
    );
};

export default Footer;