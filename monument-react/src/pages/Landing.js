import React from 'react';
import './Landing.css';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive/Archive';
import Gallery from '../components/Gallery/Gallery';

const Landing = (props) => {
    return (
        <div>
            <Header />
            <Archive />
            <Gallery />
        </div>
    )
};

export default Landing;