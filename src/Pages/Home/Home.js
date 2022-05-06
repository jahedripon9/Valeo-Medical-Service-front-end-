import React from 'react';
import Hero from '../HeroSection/Hero';
import WorkingInfo from '../HeroSection/WorkingInfo';
import NewsAndBlog from '../Latest News & Our Blog/NewsAndBlog';
import MedicalServices from '../Our Medical Services/MedicalServices';
import OurTeam from '../Our Team/OurTeam';
import Header from '../shared/Header/Header';
import Navigation from '../shared/Header/Navigation'
import MakesDifferent from '../WhatMakesUsDifferent/MakesDifferent';
// import TextTab from '../HeroSection/TextsTab'

const Home = () => {
    return (
        <div>
            <div className='lg:mx-20'><Header></Header></div> 
            <Navigation></Navigation>
            <Hero></Hero>
            {/* <TextTab></TextTab> */}
            <WorkingInfo></WorkingInfo>
            <MakesDifferent></MakesDifferent>
            <MedicalServices></MedicalServices>
            <OurTeam></OurTeam>
            <NewsAndBlog></NewsAndBlog>
        </div>
    );
};

export default Home;