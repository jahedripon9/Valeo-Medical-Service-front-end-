import React from 'react';
import './MedicalServices.css'

const MedicalServices = () => {
    return (
        <div className='rounded-xl   py-10 '>
            
            <section class="text-gray-600 body-font px-8 py-5">
                <div class="container px-20 py-0 mx-auto  bg-blue-50 rounded-md">
                    <div class="flex flex-col text-center  w-full mb-20">
                    <h1 class="text-4xl font-bold title-font mt-10 text-gray-900 py-3">Our Medical Services</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center ">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125  " src="https://i.ibb.co/7ynyh0b/cardio.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3 ">Cardio Monitoring</h2>
                            <p class="mb-4">These cases are perfectly simple and easy to distinguish a free hour when our power </p>
                           
                        </div>
                        </div>
                    </div>
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125" src="https://i.ibb.co/4WW595k/medical.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3">Medical Treatment</h2>
                            <p class="mb-4">Fusce pellentesque lectus quis placerat ultrices malesuada est vitae urna laoreet porta </p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125" src="https://i.ibb.co/r6QcQCh/emergency.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3">Emergency Help</h2>
                            <p class="mb-4">Donec cursus tellus libero, non porttitor felis desluctus ut justo non odio molestie </p>
                           
                        </div>
                        </div>
                    </div>
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125" src="https://i.ibb.co/qsKFK0H/symptom.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3">Symptom Check</h2>
                            <p class="mb-4">Mauris consectetur dui eget ullamcorper mehendrerit eros ligula consectetur </p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125" src="https://i.ibb.co/r3KSn9G/laboratory.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3">Laboratory Test</h2>
                            <p class="mb-4">Mauris consectetur dui eget ullamcorper mehendrerit eros ligula consectetur </p>
                            
                        </div>
                        </div>
                    </div>
                    <div class="p-5 lg:w-1/3 md:w-1/2">
                        <div class="h-full flex flex-col items-center text-center">
                        <img alt="team" class="flex-shrink-0 rounded-lg w-24 h-24 object-cover hover:origin-bottom object-center mb-4 hover:-rotate-12 hover:scale-125" src="https://i.ibb.co/dfcBFZx/general.png"/>
                        <div class="w-full">
                            <h2 class="title-font font-bold text-2xl text-gray-900 py-3">General Analysis</h2>
                            <p class="mb-4">Morbi sollicitudin justo non odio molestie sed venenatis elit laoreet  </p>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default MedicalServices;
