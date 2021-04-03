import React from 'react';
import { Link } from 'react-router-dom';

// Components
import RegisterForm from '../../components/RegisterForm/RegisterForm';

// Images
import bgImage from '../../media/registerBackgroung.jpg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

// Styles
import SUStyle from './Register.module.scss';

const Register = () => {    
    return (
        <section className={SUStyle.container}>
            <div className={SUStyle.bgImageContainer}>
                <img src={bgImage} alt="" className={SUStyle.bgImage} />
                <div className={SUStyle.box}>
                    <div className={SUStyle.leftSection}>
                        <FontAwesomeIcon icon={faUserCircle} className={SUStyle.leftImage} />
                        {/* <img src={SignupImage} className={SUStyle.leftImage} alt="Computer" /> */}
                        <div className={SUStyle.leftText}>
                            <h4>Already have an account?</h4>
                            <Link to="/login">Log in &#8594;</Link>
                        </div>
                    </div>
                    <div className={SUStyle.rightSection}>
                        <Link to="/" className={SUStyle.reLink}>Impact of Code</Link>
                        <RegisterForm />
                    </div>
                </div>
        </div>
        </section>
    );
}

export default Register;
