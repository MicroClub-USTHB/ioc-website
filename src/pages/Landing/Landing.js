import React from 'react';
import landingStyle from './Landing.module.scss';

// Sections
import Hero from '../../Sections/Hero/Hero';
import Info from '../../Sections/Info/Info';
import FAQ from '../../Sections/FAQ/FAQ';

// hoc
import LandingLayout from '../../hoc/LandingLayout/LandingLayout';

const Landing = () => {
    return (
        <LandingLayout>
            <Hero />
            <Info />
            <FAQ />
        </LandingLayout>
    );
}

export default Landing;
