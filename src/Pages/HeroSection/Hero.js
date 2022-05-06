import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return (
        <div>
            <section class="text-gray-600 body-font mx-1">
            <div class="container mx-auto  px-5  items-center">
                <div class=" lg:w-full w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/1mj31Md/slide02.jpg"/>
                </div>
            </div>
            <div className='text-left  ml-14'> 
                <div className=' -mt-96 my-96'>
                <h1 className=' text-4xl uppercase font-bold text-blue-400 py-5'>Higher standards</h1>
                <h1 className='text-5xl uppercase font-bold text-blue-400'>of care every day</h1>
                </div>
            </div>
            
            </section>
        </div>
    );
};

export default Hero;