import React from 'react';
import './Landing.css';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive/Archive';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/LandingFooter';

const Landing = (props) => {
    return (
        <div>
            <Header />
            <Archive />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    )
};

export default Landing;