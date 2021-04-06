import React from 'react';
import { Link } from 'react-router-dom';

// Components
import RegisterForm from '../../components/RegisterForm/RegisterForm';

// Images
import bgImage from '../../media/registerBackgroung.jpg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSpinner,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

// Styles
import SUStyle from './Register.module.scss';
import { useSelector } from 'react-redux';

const Register = () => {
    const loadingUser = useSelector(state => state.workspace.loadingUser);
    const authError = useSelector(state => state.workspace.authError);
    const UserIcon = (
        <FontAwesomeIcon icon={faUserCircle} className={SUStyle.leftImage} />
    )

    const LoadingIndicator = (
        <div className={SUStyle.loadingContainer}>
            <FontAwesomeIcon className={SUStyle.loadingIcon} icon={faSpinner} />
        </div>
    )
    return (
        <section className={SUStyle.container}>
            <div className={SUStyle.bgImageContainer}>
                <img src={bgImage} alt="" className={SUStyle.bgImage} />
                <div className={SUStyle.box}>
                    <div className={SUStyle.leftSection}>
                        {
                            loadingUser? LoadingIndicator : UserIcon
                        }
                        <div className={SUStyle.leftText}>
                            <h4>Already have an account?</h4>
                            <Link to="/login">Log in &#8594;</Link>
                        </div>
                        {
                            authError && (<div className={SUStyle.authErrorContainer}>{authError}</div>)
                        }
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
