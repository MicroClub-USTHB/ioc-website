import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Style
import dropdownStyle from './MobileDropDown.module.scss';

const MobileDropDown = () => {
    const [Nav, setNav] = useState(false);
    const buttonStyleActivated = {
        borderBottom: 'none',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0'
    }
    return (
        <div className={dropdownStyle.container}>
            <button
                className={dropdownStyle.button}
                style={Nav? buttonStyleActivated : null}
                onClick={() => {
                    setNav(state => !state);
                }}   
            >
                <span>Navigation</span>
                <div
                    className={dropdownStyle.icon}
                    style={{
                        transform: Nav && "rotate(180deg)"
                    }}
                ></div>
            </button>
            {
                Nav && (
                    <div className={dropdownStyle.dropdown}>
                        <ul className={dropdownStyle.dropdownList}>
                            <li className={dropdownStyle.listItem}>
                                <button className={dropdownStyle.listItemButton}>The Event</button>
                            </li>
                            <li className={dropdownStyle.listItem}>
                                <button className={dropdownStyle.listItemButton}>How it Works</button>
                            </li>
                            <li className={dropdownStyle.listItem}>
                                <Link className={dropdownStyle.listItemLink} to="/login">Participate</Link>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default MobileDropDown;
