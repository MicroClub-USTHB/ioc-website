import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Style
import heroStyle from './Hero.module.scss';

//media
import landingBG from '../../media/bg.jpg';
import door from '../../media/Door-min.png';
import bar from '../../media/Bar-min.png';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    return (
        <section className={heroStyle.section}>
            <div className={heroStyle.bg}>
                <img src={landingBG} alt="desert environment." />
            </div>
            <div className={heroStyle.titles}>
                <h1 className={heroStyle.title}>Impact of code</h1>
                <h2 className={heroStyle.subTitle}>Coding theory is the study of the properties of codes and their respective fitness for specific applications.</h2>
            </div>
            <div className={heroStyle.buttonDiv}>
                <ul className={heroStyle.buttonList}>
                    <li>
                        <Link to="/login">
                            <div className={heroStyle.mainButton}>
                                <button className={heroStyle.button}>Begin the challenges</button>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className={heroStyle.secondButton}>
                            <button
                                className={heroStyle.button}
                                onClick={(event) => {
                                    window.scrollTo({
                                        top: window.innerHeight,
                                        behavior: 'smooth'
                                    })
                                }}
                            >Find out more</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={heroStyle.socialListContainer}>
                <ul className={heroStyle.socialList}>
                    <li>
                        <a href="https://www.facebook.com/Micro.Club.USTHB" className={heroStyle.socialIcon}>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/micro.club/" className={heroStyle.socialIcon}>
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/micro-club/" className={heroStyle.socialIcon}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
            {
                !isMobile && (
                    <div className={heroStyle.door}>
                        <img src={bar} className={heroStyle.bar} alt="bar" />
                        <img src={bar} className={heroStyle.bar} alt="bar" />
                        <img src={door} className={heroStyle.doorImage} alt="vault door with IOC written on it" />
                    </div>
                )
            }
        </section>
    );
}

export default Hero;
