import React from 'react';

const Footer = () => {
    return (
        <div className="w-full mt-24  border-gray-200 border-t border-b">
             <div className="max-w-3xl mx-auto z-50 px-4 mt-14 sm:px-6">
                <div className="flex text-gray-500 justify-between">
                    <p>About</p>
                    <p>Blog</p>
                    <p>Donate</p>
                    <p>Press</p>
                    <p>API</p>
                    <p>Contact Us</p>
                </div>

            <img src="/Social Links.png" className="w-max mx-auto mt-4 mb-10"/>
             </div>
        </div>
    );
}

export default Footer;
