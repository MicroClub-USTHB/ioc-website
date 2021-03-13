
import React from 'react';

// Style
import layoutStyle from './LandingLayout.module.scss';

// media
import mcLogo from '../../media/MC Logo-min.svg';
import instagramLogo from '../../media/instagramLogo-min.svg';
import linkedinLogo from '../../media/linkedinLogo-min.svg';
import facebookLogo from '../../media/facebookLogo-min.svg';


const LandingLayout = ({children}) => {
    return (
        <div>
            <nav className={layoutStyle.navBar}>
                <ul className={layoutStyle.navList}>
                    <li>
                        <img className={layoutStyle.logo} src={mcLogo} alt="logo of Micro Club" />
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button>Home</button>
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button>The Event</button>
                    </li>
                    <li className={layoutStyle.navLink}>
                        <button>How it works</button>
                    </li>
                    <li className={layoutStyle.navLinkButton}>
                        <button>Participate</button>
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
                    <a href="#">
                        <img src={instagramLogo} alt="Instagram logo" />
                    </a>
                    <a href="#">
                        <img src={facebookLogo} alt="Facebook logo" />
                    </a>
                    <a href="#">
                        <img src={linkedinLogo} alt="Linked In logo" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default LandingLayout;
