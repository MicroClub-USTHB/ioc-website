import { faChair, faDoorOpen, faHome, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

// Style
import snavStyle from './SingedinNav.module.scss';
import { useDispatch } from 'react-redux';
import { setUser, signOut } from '../../redux/workspaceSlice';

const SignedinNav = () => {
    const [NavAppear, setNavAppear] = useState(false);
    const dispatch = useDispatch();

    return (
        <div
            className={snavStyle.signedinNav}
            onMouseLeave={() => {
                setNavAppear(false);
            }}
        >
            <div
                className={snavStyle.circle}
                onMouseEnter={() => {
                    setNavAppear(true);
                }}
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className={snavStyle.circleIcon}
                />
            </div>
            {
                NavAppear && (
                    <div className={snavStyle.navigationBody}>
                        <ul className={snavStyle.navigationList}>
                            <li>
                                <Link className={snavStyle.link} to="/">
                                    <FontAwesomeIcon icon={faHome}  className={snavStyle.icon}/>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={snavStyle.link} to="/workspace">
                                    <FontAwesomeIcon icon={faPen}  className={snavStyle.icon}/>
                                    Workspace
                                </Link>
                            </li>
                            <li>
                                <Link className={snavStyle.link} to="/lounge">
                                    <FontAwesomeIcon icon={faChair}  className={snavStyle.icon}/>
                                    Lounge
                                </Link>
                            </li>
                            <li>
                                <button
                                    className={snavStyle.button}
                                    onClick={() => {
                                        dispatch(signOut());
                                    }}
                                >
                                    <FontAwesomeIcon icon={faDoorOpen}  className={snavStyle.icon}/>
                                    Signout
                                </button>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default SignedinNav;
