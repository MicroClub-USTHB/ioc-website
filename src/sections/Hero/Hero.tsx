import React from 'react';
import { Link } from 'react-router-dom';

// icons
import {
  UilLinkedin,
  UilFacebook,
  UilInstagram,
} from '@iconscout/react-unicons';

// resources
import hero_image from '../../resources/HeroImage-min.png';

// styles
import heroStyle from './Hero.module.scss';
import Navigation from './components/Navigation/Navigation';

interface LineProps {
  text: string
}

const LineText: React.FC<LineProps> = ({text}) => {
  return (
    <>
      <div className={heroStyle.line}></div>
      <span>{text}</span>
    </>
  )
}

const Hero = () => {
  return (
    <section>
      <div className={heroStyle.navigation}>
        <Link to="/">Impact of Code</Link>
        <div className={heroStyle.nav}>
          <div className={heroStyle.nav_social}>
            <a href="/">
              <UilFacebook />
            </a>
            <a href="/">
              <UilLinkedin />
            </a>
            <a href="/">
              <UilInstagram />
            </a>
          </div>
          {/* nav dropdown */}
          <Navigation />
        </div>
      </div>
      <div className={heroStyle.main_container}>
        <div className={`${heroStyle.hero_nav} ${heroStyle.first_nav}`}>
          <LineText text="Get Started" />
        </div>
        <div  className={heroStyle.hero_image_container}>
          <img src={hero_image} alt="Explorer" />
          <div className={heroStyle.decoration}></div>
          <div className={heroStyle.image_bottom_text}>
            <LineText text="Learn More"/>
          </div>
        </div>
        <div className={`${heroStyle.hero_nav} ${heroStyle.second_nav}`}>
          <LineText text="Micro Club" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
