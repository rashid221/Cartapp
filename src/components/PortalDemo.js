import React from 'react';
import ReactDOM from 'react-dom';

const PortalDemo = () => {
    return ReactDOM.createPortal(
        <div>
            <h1>Demo portal</h1>
        </div>,
        document.getElementById('root-up')
    );
};

export default PortalDemo;