import React from 'react';

// Style
import landingStyle from './Landing.module.scss';

// Sections
import Hero from '../../Sections/Hero/Hero';
import Info from '../../Sections/Info/Info';
import FAQ from '../../Sections/FAQ/FAQ';

// hoc
import Layout from '../../hoc/Layout/Layout';

const Landing = () => {
    return (
        <Layout>
            <main className={landingStyle.main}>
                <Hero />
                <Info />
                <FAQ />
            </main>
        </Layout>
    );
}

export default Landing;
