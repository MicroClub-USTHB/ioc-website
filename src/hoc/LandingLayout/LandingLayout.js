
import React from 'react';

// Style
import layoutStyle from './LandingLayout.module.scss';

// media
import mcLogo from '../../media/MC Logo-min.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const LandingLayout = ({children}) => {
    return (
        <div>
            <nav className={layoutStyle.navBar}>
                <ul className={layoutStyle.navList}>
                    <li>
                        <a href="/">
                            <img className={layoutStyle.logo} src={mcLogo} alt="logo of Micro Club" />
                        </a>
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button>Home</button>
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight,
                                    behavior: 'smooth'
                                })
                            }}
                        >The Event</button>
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button
                            onClick={() => {
                                window.scrollTo({
                                    top: window.document.body.scrollHeight,
                                    behavior: 'smooth'
                                })
                            }}
                        >How it works</button>
                    </li>
                    <li className={layoutStyle.navLinkButton}>
                        <button>
                            <a href="/register">Participate</a>
                        </button>
                    </li>
                </ul>
            </nav>
            {children}
            <footer className={layoutStyle.footerBar}>
                <div className={layoutStyle.footerLinks}>
                    <a href="microclub.net">Micro Club Website</a>
                    <a href="#">Participate</a>
                </div>
                <div className={layoutStyle.footerSocial}>
                    <a href="https://www.facebook.com/Micro.Club.USTHB">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.instagram.com/micro.club/">
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    <a href="https://www.linkedin.com/company/micro-club/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default LandingLayout;
