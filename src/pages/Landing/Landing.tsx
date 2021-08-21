import React from 'react';
import About from '../../Sections/About/About';
import FAQ from '../../Sections/FAQ/FAQ';
import Footer from '../../Sections/Footer/Footer';
import Hero from '../../Sections/Hero/Hero';
import Numbers from '../../Sections/Numbers/Numbers';
import Video from '../../Sections/Video/Video';

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
      <Footer />
    </main>
  );
}

export default Landing;
