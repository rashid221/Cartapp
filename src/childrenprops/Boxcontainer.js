import React from 'react';

const Boxcontainer = (props) => {
    return (
        <div className='props-child'>
            <h1>Children</h1>
            {props.value}
            {props.children}
        </div>
    );
};

export default Boxcontainer;