import React from 'react';

const Header = () => {
    return (
        <div className='container mx-auto invisible lg:visible'>
            
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto	'>
                        <h1 className='font-bold text-1xl text-emerald-500' >Emergency Cases <br /><span className='font-bold text-2xl text-emerald-500' >+0902123123</span></h1> 
                    </div>
                    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src="https://i.ibb.co/PjFzZqF/logo.png" alt="" />
                    </a>
                    <div class="lg:w-2/5 inline-flex  lg:ml-0">
                    <div className='flex lg:w-50% flex-wrap items-center text-base md:ml-auto	'>
                        <h1 className='font-bold text-xl text-emerald-500' >Online conslutation <br /><span className='font-bold text-3xl text-emerald-500' >valeo@gmail.com</span></h1> 
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;