import React from 'react'
import '../../../App.css';
import Cards from '../components/Cards';
import Opening from '../components/Opening';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import Product from '../components/Product';

function Home () {
    return (
        <>
        <Opening />
        {/* <Slideshow/> */}
        <Product/>
        <SignUp/>
        <Testimonials/>
        <News/>
        <Footer/>
        </>
    )
}

export default Home;