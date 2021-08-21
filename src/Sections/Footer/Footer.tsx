import React from 'react';
import { Link } from 'react-router-dom';

// styles
import footerStyle from './Footer.module.scss';

// resources
import footer1 from '../../resources/Footer1-min.png';
import footer2 from '../../resources/Footer2-min.png';

const Footer = () => {
  return (
    <section className={footerStyle.footer_container}>
      <div className={footerStyle.card_container}>
        <img className={footerStyle.dec1} src={footer1} alt="" />
        <div className={footerStyle.content_container}>
          <h1 className={footerStyle.title}>IMPACT OF CODE</h1>
          <div className={footerStyle.subTitles}>
            <h2>A <a href="/">Micro Club</a> Event</h2>
            <Link to="/"><h2>Start playing</h2></Link>
          </div>
        </div>
        <img className={footerStyle.dec2} src={footer2} alt="" />
      </div>
    </section>
  );
}

export default Footer;
