import React from 'react';

import './Items.css';

const item = ( props ) => {
    return (
        <div className="Item">
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <input type="text" onChange={props.changed} value={props.quantity} />
            <input type="text" onChange={props.changed} value={props.price} />
        </div>
    )
};

export default item;