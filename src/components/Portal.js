import React from 'react';
import ReactDOM from 'react-dom';

const Portal = () => {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals</h1>
        </div>,
        document.getElementById('root-portal')
    );
};

export default Portal;