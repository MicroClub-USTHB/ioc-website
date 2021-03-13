import React from 'react';
import heroStyle from './Hero.module.scss';

//media
import landingBG from '../../media/landingBG-min.jpg';
import door from '../../media/Door-min.png';
import bar from '../../media/Bar-min.jpg';
import instagramLogo from '../../media/instagramLogo-min.svg';
import linkedinLogo from '../../media/linkedinLogo-min.svg';
import facebookLogo from '../../media/facebookLogo-min.svg';

const Hero = () => {
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
                        <div className={heroStyle.mainButton}>
                            <button className={heroStyle.button}>Begin the challenges</button>
                        </div>
                    </li>
                    <li>
                        <div className={heroStyle.secondButton}>
                            <button className={heroStyle.button}>Find out more</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={heroStyle.socialListContainer}>
                <ul className={heroStyle.socialList}>
                    <li>
                        <button className={heroStyle.socialButton}>
                            <img src={facebookLogo} alt="Facebook logo" />
                        </button>
                    </li>
                    <li>
                        <button className={heroStyle.socialButton}>
                            <img src={instagramLogo} alt="Instagram logo" />
                        </button>
                    </li>
                    <li>
                        <button className={heroStyle.socialButton}>
                            <img src={linkedinLogo} alt="Linked In logo" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className={heroStyle.door}>
                <img src={bar} className={heroStyle.bar} alt="bar" />
                <img src={bar} className={heroStyle.bar} alt="bar" />
                <img src={door} className={heroStyle.doorImage} alt="vault door with IOC written on it" />
            </div>
        </section>
    );
}

export default Hero;
