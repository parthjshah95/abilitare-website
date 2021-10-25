import React from 'react'
import '../../../App.css';
import Cards from '../components/Cards';
import Opening from '../components/Opening';
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';

function Home () {
    return (
        <>
        <Opening />
        {/* <Cards /> */}
        <Slideshow/>
        <SignUp/>
        <Footer/>
        </>
    )
}

export default Home;