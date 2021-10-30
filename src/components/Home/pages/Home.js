import React from 'react'
import '../../../App.css';
import Cards from '../components/Cards';
import Opening from '../components/Opening';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Testimonials from '../components/Testimonials';

function Home () {
    return (
        <>
        <Opening />
        <Slideshow/>
        <SignUp/>
        <Testimonials/>
        <Footer/>
        </>
    )
}

export default Home;