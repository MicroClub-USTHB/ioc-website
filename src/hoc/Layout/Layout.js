
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

// Components
import SignedinNav from '../../components/SignedinNav/SignedinNav';

// Style
import layoutStyle from './Layout.module.scss';

// media
import mcLogo from '../../media/mcLogoInvis-min.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MobileDropDown from '../../components/MobileDropDown/MobileDropDown';


const Layout = ({children}) => {
    const user = useSelector(state => state.workspace.user);
    const isMobile = useSelector(state => state.workspace.isMobile);
    const location = useLocation();

    return (
        <div>
            {
                location.pathname === '/' && (
                    <nav className={layoutStyle.navBar}>
                            <ul className={layoutStyle.navList}>
                                <li>
                                    <Link to="/">
                                        <img className={layoutStyle.logo} src={mcLogo} alt="logo of Micro Club" />
                                    </Link>
                                </li>
                                {isMobile?
                                    <MobileDropDown /> : (
                                        <>
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
                                            {
                                                !user && (
                                                    <li>
                                                        <Link to='/register'>
                                                            <button className={layoutStyle.navLinkButton}>
                                                                Participate
                                                            </button>
                                                        </Link>
                                                    </li>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </ul>
                        </nav>
                    )
                }
                {
                    user && (<SignedinNav />)
                }
                {children}
                {
                    location.pathname === '/' && (
                        <footer className={layoutStyle.footerBar}>
                            <div className={layoutStyle.footerContent}>
                                <div className={layoutStyle.footerLinks}>
                                    <a className={layoutStyle.footerLink} href="https://www.microclub.net">Micro Club Website</a>
                                    <Link className={layoutStyle.footerLink} to="/login">Participate</Link>
                                </div>
                                <div className={layoutStyle.footerSocial}>
                                    <a href="https://www.facebook.com/Micro.Club.USTHB">
                                        <FontAwesomeIcon className={layoutStyle.footerIcon} icon={faFacebookSquare} />
                                    </a>
                                    <a href="https://www.instagram.com/micro.club/">
                                        <FontAwesomeIcon className={layoutStyle.footerIcon} icon={faInstagramSquare} />
                                    </a>
                                    <a href="https://www.linkedin.com/company/micro-club/">
                                        <FontAwesomeIcon className={layoutStyle.footerIcon} icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                        </footer>
                    )
                }
        </div>
    );
}

export default Layout;
