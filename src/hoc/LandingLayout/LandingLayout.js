
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import SignedinNav from '../../components/SignedinNav/SignedinNav';

// Style
import layoutStyle from './LandingLayout.module.scss';

// media
import mcLogo from '../../media/MC Logo-min.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const LandingLayout = ({children}) => {
    const user = useSelector(state => state.workspace.user);
    if (!user) {
        return (
            <div>
                <nav className={layoutStyle.navBar}>
                    <ul className={layoutStyle.navList}>
                        <li>
                            <Link to="/">
                                <img className={layoutStyle.logo} src={mcLogo} alt="logo of Micro Club" />
                            </Link>
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
                        <li>
                            <Link to='/register'>
                                <button className={layoutStyle.navLinkButton}>
                                    Participate
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {children}
                <footer className={layoutStyle.footerBar}>
                    <div className={layoutStyle.footerLinks}>
                        <a href="https://www.microclub.net">Micro Club Website</a>
                        <Link to="/login">Participate</Link>
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
    } else {
        return (
            <div>
                <SignedinNav />
                {children}
            </div>
        );
    }
}

export default LandingLayout;
