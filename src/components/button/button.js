import React from 'react';
import './button.scss';

export default function Button(props) {
    const {
        btnName, btnClass, btnBox, onClick,
        btnName2, btnClass2, onClick2,
    } = props;

    return ( 
        <div className={btnBox}>
            <div className={btnClass} onClick={onClick}>{btnName}</div>
            <div className={btnClass2} onClick={onClick2}>{btnName2}</div>
        </div>
    );
}