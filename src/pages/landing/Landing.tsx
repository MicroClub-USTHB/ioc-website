import React from 'react';
import About from '../../sections/About/About';
import Hero from '../../sections/Hero/Hero';

// styles
import landingStyle from './Landing.module.scss';

interface Props {
}

const Landing: React.FC<Props> = () => {
  return (
    <main className={landingStyle.main_container}>
      <Hero />
      <About />
    </main>
  );
}

export default Landing;
