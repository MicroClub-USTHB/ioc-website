import { faChair, faDoorOpen, faHome, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import snavStyle from './SingedinNav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/workspaceSlice';

const SignedinNav = () => {
    const isMobile = useSelector(state => state.workspace.isMobile);
    const [NavAppear, setNavAppear] = useState(false);
    const dispatch = useDispatch();

    return (
        <div
            className={snavStyle.signedinNav}
            onMouseLeave={() => {
                if (!isMobile) {
                    setNavAppear(false);
                }
            }}
        >
            <div
                className={snavStyle.circle}
                onMouseEnter={() => {
                    if (!isMobile) {
                        setNavAppear(true);
                    }
                }}
                onClick={() => {
                    setNavAppear(state => !state);
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
                            <li
                                onClick={() => {
                                    dispatch(signOut());
                                }}
                            >
                                <button className={snavStyle.button}>
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
