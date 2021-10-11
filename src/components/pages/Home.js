import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import Opening from '../Opening';
import Slideshow from '../Slideshow';
import Footer from '../Footer';


function Home () {
    return (
        <>
        <Opening />
        {/* <Cards /> */}
        <Slideshow/>
        <Footer/>
        </>
    )
}

export default Home;