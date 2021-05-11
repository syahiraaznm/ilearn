import React from 'react';
import './title.scss';

export default function Title(props) {
    const {title, style} = props;

    return ( 
        <div className= "titleBox" style={{style}}>
            {title}
        </div>
    );
}