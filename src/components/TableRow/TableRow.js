import React from 'react';

// Images
import checkmarkImage from '../../media/checkmark-min.svg';
import crossImage from '../../media/cross-min.svg';
import tbaImage from '../../media/tba-min.svg';

// Style
import rowStyle from './TableRow.module.scss';

const TableRow = ({number, name, completed, score}) => {
    let icon;
    if ( completed === 'Yes' ) {
        icon = (<img className={rowStyle.icon} src={checkmarkImage} alt=''></img>)
    } else if ( completed === 'No' ) {
        icon = (<img className={rowStyle.icon} src={crossImage} alt=''></img>)
    } else {
        icon = (<img className={rowStyle.icon} src={tbaImage} alt=''></img>)
    }
    return (
        <div className={rowStyle.row}>
            <div>{number}</div>
            <div>{name}</div>
            <div>{icon}</div>
            <div>{score}</div>
        </div>
    );
}

export default TableRow;
