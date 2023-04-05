import React from 'react';
import ReactDOM from 'react-dom';

const Parent = () => {
    return ReactDOM.createPortal(
        <h1>Parent Portal</h1>,
        document.getElementById('main-root')
    )
};

export default Parent;