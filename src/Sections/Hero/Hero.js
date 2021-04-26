import React from 'react';
import { useSelector } from 'react-redux';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Style
import heroStyle from './Hero.module.scss';

// Images
import heroImg from '../../media/gorillaHead.svg';
import lineDec from '../../media/decoration-1.svg';
import twoLineDec from '../../media/decoration-2.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    return (
        <section className={heroStyle.hero}>
            <div className={heroStyle.topLeftDec}></div>
            <div className={heroStyle.content}>
                <h1 className={heroStyle.title}>Impact of Code</h1>
                <p className={heroStyle.description}>Coding theory is the study of the properties of codes and their respective fitness for specific applications.</p>
                <div className={heroStyle.buttonsContainer}>
                    <Link to="/register">
                        <button className={heroStyle.mainButton}>Get Started</button>
                    </Link>
                    <span className={heroStyle.buttonSeparator}>OR</span>
                    <button
                        className={heroStyle.secondaryButton}
                        onClick={() => {
                            window.scrollBy({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            })
                        }}
                    >Learn More</button>
                </div>
                <div className={heroStyle.socialContainer}>
                    <a href="https://www.facebook.com/Micro.Club.USTHB">
                        <FontAwesomeIcon  className={heroStyle.socialIcon} icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.instagram.com/micro.club/">
                        <FontAwesomeIcon  className={heroStyle.socialIcon} icon={faInstagramSquare} />
                    </a>
                    <a href="https://www.linkedin.com/company/micro-club/">
                        <div>
                            <FontAwesomeIcon  className={heroStyle.socialIcon} icon={faLinkedin} />
                        </div>
                    </a>
                </div>
            </div>
            <img className={heroStyle.heroImg} src={heroImg} alt="" />
            {
                !isMobile && (
                    <>
                        <div className={heroStyle.titleWatermark}>Impact of Code</div>
                        <div className={`${heroStyle.decorationRect} decorationRect`}></div>
                        <div className={`${heroStyle.decorationRect} decorationRect`}></div>
                        <div className={`${heroStyle.decorationRect} decorationRect`}></div>
                        <img className={heroStyle.lineDec} src={lineDec} alt="" />
                        <img className={heroStyle.twoLineDec} src={twoLineDec} alt="" />
                    </>
                )
            }
        </section>
    );
}

export default Hero;
