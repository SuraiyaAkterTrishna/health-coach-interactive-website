import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div>
            <footer>
                <p>copyright @{getCurrentYear()}</p>
            </footer>
        </div>
    );
};

export default Footer;