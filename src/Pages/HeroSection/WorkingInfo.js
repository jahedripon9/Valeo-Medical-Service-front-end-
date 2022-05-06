import React from 'react';
import {  NavLink } from 'react-router-dom';

const WorkingInfo = () => {
    return (
        <div className='-mt-72 mx-3'>
            <section class="text-gray-600 body-font ">
                <div class="container px-5  mx-auto">
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-blue-300 opacity-75 hover:opacity-100">
                        
                        <div class="p-5 ">
                           
                            <h1 class="title-font text-lg font-bold text-black mb-3 uppercase">Working Hours</h1> <hr className='mb-3' />
                            
                            <p class="leading-relaxed mb-3 font-bold uppercase py-2 text-black"> 
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="-mb-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                                </svg>
                                </span> Monday - Friday | 08:00 -7:00 pm</p> <hr className='mb-3' />
                            <p class="leading-relaxed mb-3 font-bold uppercase py-2 text-black"> 
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="-mb-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span> saturday | 11:00 am - 03:00 pm</p>
                            <p class="leading-relaxed mb-3 font-bold uppercase py-2 text-black"> <hr className='mb-3' />
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="-mb-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </span> sunday | closed</p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  bg-blue-300 opacity-75 hover:opacity-100">
                        
                        <div class="p-6">
                            
                            <h1 class="title-font text-lg font-bold text-black mb-3 uppercase">Contact Details</h1> <hr className='mb-3' />
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p class="leading-relaxed mb-3 font-bold uppercase py-2 text-black">living stone, season street 45/2 los angeles, inc -4502</p>
                            <NavLink target="_blank" to="https://www.google.com/maps"><button className='border-black border-2 border-solid p-2 rounded-xl uppercase bg-white'>Get Direction on the map</button></NavLink>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  bg-blue-300 opacity-75 hover:opacity-100">
                        
                        <div class="p-6">
                            
                            <h1 class="title-font text-lg font-bold text-black mb-3 uppercase">Request an appointment</h1> <hr className='mb-3' />
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p class="leading-relaxed mb-3 font-bold uppercase py-2 text-black">choose the right time and date for you</p>
                            <NavLink target="_blank" to="#"><button className='border-black border-2 border-solid p-2 rounded-xl uppercase bg-white'>make an appointment</button></NavLink>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </section>
        </div>
    );
};

export default WorkingInfo;