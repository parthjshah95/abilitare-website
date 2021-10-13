import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Opening from '../Opening';
import Slideshow from '../Slideshow';
import Footer from '../Footer';
import SignUp from '../SignUp';

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