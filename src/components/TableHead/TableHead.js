import React from 'react';

// Style
import headStyle from './TableHead.module.scss';

const TableHead = ({titles}) => {
    return (
        <div className={headStyle.row}>
            <div className={headStyle.tableHead}>{titles[0]}</div>
            <div className={headStyle.tableHead}>{titles[1]}</div>
            <div className={headStyle.tableHead}>{titles[2]}</div>
            <div className={headStyle.tableHead}>{titles[3]}</div>
        </div>
    );
}

export default TableHead;
