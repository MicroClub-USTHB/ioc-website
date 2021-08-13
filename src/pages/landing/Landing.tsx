import React from 'react';
import About from '../../sections/About/About';
import FAQ from '../../sections/FAQ/FAQ';
import Hero from '../../sections/Hero/Hero';
import Numbers from '../../sections/Numbers/Numbers';
import Video from '../../sections/Video/Video';

// styles
import landingStyle from './Landing.module.scss';

interface Props {
}

const Landing: React.FC<Props> = () => {
  return (
    <main className={landingStyle.main_container}>
      <Hero />
      <About />
      <Numbers />
      <Video />
      <FAQ />
    </main>
  );
}

export default Landing;
