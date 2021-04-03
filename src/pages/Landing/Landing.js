import React from 'react';

// Style
import landingStyle from './Landing.module.scss';

// Sections
import Hero from '../../Sections/Hero/Hero';
import Info from '../../Sections/Info/Info';
import FAQ from '../../Sections/FAQ/FAQ';

// hoc
import Layout from '../../hoc/Layout/Layout';
import LandingLayout from '../../hoc/LandingLayout/LandingLayout';

const Landing = () => {
    return (
        <Layout>
            <Hero />
            <Info />
            <FAQ />
        </Layout>
    );
}

export default Landing;
