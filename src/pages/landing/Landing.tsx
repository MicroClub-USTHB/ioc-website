import React from 'react';
import About from '../../sections/About/About';
import Hero from '../../sections/Hero/Hero';
import Video from '../../sections/Video/Video';

// styles
import landingStyle from './Landing.module.scss';

interface Props {
}

const Landing: React.FC<Props> = () => {
  return (
    <main className={landingStyle.main_container}>
      {/* <Hero /> */}
      {/* <About /> */}
      <Video />
    </main>
  );
}

export default Landing;
